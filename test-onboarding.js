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

  // switch to signup
  try { await page.click('text=Need an account? Create one'); } catch(e) {}
  await page.fill('input[type=email]', email);
  await page.fill('input[placeholder="Password"]', password);
  await page.fill('input[placeholder="Confirm Password"]', password);
  await Promise.all([
    page.waitForNavigation({ url: '**/onboarding.html', timeout: 20000 }).catch(()=>null),
    page.click('button:has-text("Create account")')
  ]);
  console.log('After create, url=', page.url());

  // ensure on onboarding
  if (!page.url().includes('onboarding')) {
    // maybe it redirected to index if onboarded; try open onboarding explicitly
    await page.goto(base + '/onboarding.html', { waitUntil: 'networkidle' });
  }
  // advance to disclaimer (slide with LET'S MOVE button which has .ob-btn-primary). Click next until it appears
  for (let i=0;i<12;i++){
    const btn = await page.$('button.ob-btn-primary');
    if (btn) break;
    const next = await page.$('button.ob-nav-next');
    if (!next) break;
    await next.click();
    await page.waitForTimeout(400);
  }
  // Fill name
  await page.fill('input[placeholder="Full name"]', name);
  // Click the disclaimer checkbox by clicking its label text
  const label = await page.$('text=I have read and understand the disclaimer');
  if (label) await label.click(); else {
    // fallback: click generic checkbox area
    const cb = await page.$('div[role="checkbox"]')
    if(cb) await cb.click();
  }
  // Click LET'S MOVE
  const move = await page.$('button.ob-btn-primary:has-text("LET\'S MOVE")');
  if(move) {
    await Promise.all([
      page.waitForNavigation({ url: '**/index.html', timeout: 20000 }).catch(()=>null),
      move.click()
    ]);
  } else {
    // try text match
    const move2 = await page.$('text=LET\'S MOVE');
    if(move2) { await move2.click(); }
  }

  console.log('After move, url=', page.url());

  // Check localStorage for axis_disclaimer:<uid>
  const uid = await page.evaluate(()=>{
    try{ return (window.AXIS_auth && window.AXIS_auth.currentUser && window.AXIS_auth.currentUser.uid) || localStorage.getItem('axis_auth_uid') }catch(e){return null}
  });
  console.log('detected uid:', uid);
  const key = uid ? `axis_disclaimer:${uid}` : 'axis_disclaimer';
  const disc = await page.evaluate((k)=>{ try { return localStorage.getItem(k); } catch(e){return null} }, key);
  console.log('disclaimer key', key, 'value=', disc);

  // confirm greeting on index shows first name
  await page.goto(base + '/index.html', { waitUntil: 'networkidle' });
  const content = await page.content();
  const found = content.includes(name.split(/\s+/)[0]);
  console.log('greeting contains first name?', found);

  await browser.close();
  console.log('done');
})();
