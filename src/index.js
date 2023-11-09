const cardOuter = document.getElementById('card');
const cardInner = document.getElementById('card-inner');
const outerRadiusInput = document.getElementById('or');
const outerThicknessInput = document.getElementById('ot');
const outerRadiusValueDisplay = document.getElementById('or-value');
const outerThicknessValueDisplay = document.getElementById('ot-value');

function updateCardStyleAndValues() {
    const outerRadius = parseInt(outerRadiusInput.value, 10);
    const outerThickness = parseInt(outerThicknessInput.value, 10);
    const innerRadius = Math.max(0, Math.ceil(outerRadius - outerThickness / 2));

    cardOuter.style.borderRadius = `${outerRadius}px`;
    cardOuter.style.padding = `${outerThickness}px`;
    cardInner.style.borderRadius = `${innerRadius}px`;
    cardInner.innerHTML = `<strong class="text-2xl p-2">${innerRadius}px</strong>`;

    outerRadiusValueDisplay.textContent = outerRadius;
    outerThicknessValueDisplay.textContent = outerThickness;
}

function addInputEventListeners() {
    outerRadiusInput.addEventListener('input', updateCardStyleAndValues);
    outerThicknessInput.addEventListener('input', updateCardStyleAndValues);
}

addInputEventListeners();
updateCardStyleAndValues();
