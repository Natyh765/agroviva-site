document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-oferta');
  const box = document.getElementById('oferta');

  const ofertas = [
    'Banana prata: R$ 4,99/kg',
    'Maçã fuji: R$ 6,49/kg',
    'Alface crespa: 2 por R$ 5,00',
    'Tomate orgânico: R$ 8,90/kg'
  ];

  if (btn && box) {
    btn.addEventListener('click', () => {
      const item = ofertas[Math.floor(Math.random() * ofertas.length)];
      box.textContent = `Oferta da semana: ${item}!`;
      box.classList.remove('oculto');
    });
  }
});
