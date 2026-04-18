const { chromium } = require('playwright');
(async ()=>{
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const base = 'http://localhost:4173';
  const ts = Date.now();
  const email = `test+${ts}@example.com`;
  const name = `TestUser${ts}`;
  const password = 'Password123!';
  console.log('Using', email, password);
  await page.goto(base + '/login.html', { waitUntil: 'networkidle' });

  try { await page.click('text=Need an account? Create one'); } catch(e) {}
  await page.fill('input[type=email]', email);
  await page.fill('input[placeholder="Password"]', password);
  await page.fill('input[placeholder="Confirm Password"]', password);
  await Promise.all([
    page.waitForNavigation({ url: '**/onboarding.html', timeout: 20000 }).catch(()=>null),
    page.click('button:has-text("Create account")')
  ]);
  console.log('After create, url=', page.url());

  if (!page.url().includes('onboarding')) {
    await page.goto(base + '/onboarding.html', { waitUntil: 'networkidle' });
  }

  // Wait for app to load user and onboarding scripts
  await page.waitForTimeout(1000);

  // Get uid
  const uid = await page.evaluate(()=>{
    try{ return (window.AXIS_auth && window.AXIS_auth.currentUser && window.AXIS_auth.currentUser.uid) || localStorage.getItem('axis_auth_uid') }catch(e){return null}
  });
  console.log('detected uid:', uid);
  const key = uid ? `axis_disclaimer:${uid}` : 'axis_disclaimer';
  const onboardKey = uid ? `axis_onboarded:${uid}` : 'axis_onboarded';
  const record = { name, accepted: true, date: new Date().toISOString() };
  await page.evaluate(({k,r,ok})=>{ try{ localStorage.setItem(k, JSON.stringify(r)); localStorage.setItem(ok, JSON.stringify(true)); localStorage.setItem('hasCompletedOnboarding','true'); }catch(e){} }, {k:key, r:record, ok:onboardKey});

  // Navigate to index and verify greeting
  await page.goto(base + '/index.html', { waitUntil: 'networkidle' });
  const content = await page.content();
  const found = content.includes(name.split(/\s+/)[0]);
  console.log('greeting contains first name?', found);

  // Dump localStorage scoped keys
  const stored = await page.evaluate(({k,ok})=>{ try{return {disc: localStorage.getItem(k), onboard: localStorage.getItem(ok)} }catch(e){return null} }, {k: key, ok: onboardKey});
  console.log('stored:', stored);

  await browser.close();
  console.log('done');
})();
