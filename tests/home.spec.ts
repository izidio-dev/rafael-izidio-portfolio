import { test, expect } from "@playwright/test";

const secoes = ["Sobre mim", "Minha meta", "Habilidades", "Projetos", "Contato"];

test("seções aparecem na ordem certa", async ({ page }) => {
  await page.goto("/");
  const titulos = await page.locator("main h2").allTextContents();
  expect(titulos.map((t) => t.trim())).toEqual(secoes);
});

test("botão principal leva ao WhatsApp", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByRole("link", { name: "Quero um site para meu negócio" });
  await expect(cta).toHaveAttribute("href", /^https:\/\/wa\.me\/55\d+\?text=/);
});

test("sem currículo cadastrado, botão de currículo não aparece", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Baixar currículo" })).toHaveCount(0);
});

test("com movimento reduzido, tudo visível sem rolar", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const el of await page.locator(".reveal").all()) {
    await expect(el).toHaveCSS("opacity", "1");
  }
});

test("sem JavaScript, as seções continuam visíveis", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/");
  for (const el of await page.locator(".reveal").all()) {
    await expect(el).toHaveCSS("opacity", "1");
  }
  await ctx.close();
});

test("no celular (360px) não há rolagem lateral", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto("/");
  const largura = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(largura).toBeLessThanOrEqual(360);
});

test("JavaScript aparece como Básico", async ({ page }) => {
  await page.goto("/");
  const item = page.getByTestId("tec-JavaScript");
  await expect(item).toContainText("Básico");
});

test("contatos vazios não viram link quebrado", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#contato a[href='']")).toHaveCount(0);
  await expect(page.locator("#contato a[href*='undefined']")).toHaveCount(0);
});

test("projeto de cliente real tem link ao vivo e GitHub/LinkedIn aparecem", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Ver ao vivo/ }).first()).toHaveAttribute("href", "https://dhlimpservice.pages.dev/");
  await expect(page.locator("#contato a[href='https://github.com/izidio-dev']")).toHaveCount(1);
  await expect(page.locator("#contato a[href='https://www.linkedin.com/in/rafael-izidio-093151400']")).toHaveCount(1);
});
