import { test, expect } from "@playwright/test";
import { linkWhatsApp } from "../src/lib/whatsapp";

test("monta link com DDI 55 e mensagem codificada", () => {
  expect(linkWhatsApp("(11) 99999-0000", "Olá! Quero um site")).toBe(
    "https://wa.me/5511999990000?text=Ol%C3%A1!%20Quero%20um%20site",
  );
});

test("não duplica o 55 quando o número já tem DDI", () => {
  expect(linkWhatsApp("+55 11 99999-0000", "oi")).toBe(
    "https://wa.me/5511999990000?text=oi",
  );
});
