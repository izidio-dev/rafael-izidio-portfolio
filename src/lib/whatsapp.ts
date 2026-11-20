/**
 * Monta o link "clique para conversar" do WhatsApp.
 * Aceita o número em qualquer formato: "(11) 99999-0000", "+55 11 ...", etc.
 */
export function linkWhatsApp(numero: string, mensagem: string): string {
  // Remove tudo que não for dígito.
  let digitos = numero.replace(/\D/g, "");
  // Números brasileiros sem DDI têm até 11 dígitos (DDD + número): prefixa 55.
  if (digitos.length <= 11) digitos = "55" + digitos;
  return `https://wa.me/${digitos}?text=${encodeURIComponent(mensagem)}`;
}
