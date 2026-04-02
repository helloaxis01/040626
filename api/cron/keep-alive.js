/**
 * Supabase keep-alive ping for Vercel Cron.
 * Runs a minimal SELECT (no rows returned to the client).
 * Requires: CRON_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

module.exports = async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.method !== 'POST') {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const secret = process.env.CRON_SECRET;
  const auth = req.headers.authorization || '';
  if (!secret || auth !== `Bearer ${secret}`) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  const supabaseUrl = (process.env.SUPABASE_URL || process.env.AXIS_SUPABASE_URL || '').replace(
    /\/$/,
    ''
  );
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error('keep-alive: missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({ ok: false, error: 'server_misconfigured' });
  }

  try {
    const url = `${supabaseUrl}/rest/v1/tester_signups?select=id&limit=1`;
    const upstream = await fetch(url, {
      method: 'GET',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Accept: 'application/json',
      },
    });

    if (!upstream.ok) {
      console.error('keep-alive: upstream', upstream.status, await upstream.text());
      res.setHeader('Cache-Control', 'no-store');
      return res.status(502).json({ ok: false, error: 'upstream_failed' });
    }

    console.log('keep-alive: ok', new Date().toISOString());
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ ok: true, at: new Date().toISOString() });
  } catch (err) {
    console.error('keep-alive: exception', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({ ok: false, error: 'exception' });
  }
};
