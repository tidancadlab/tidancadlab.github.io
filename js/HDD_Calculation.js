// DOM Elements
const elements = {
    dots: document.getElementById("dots"),
    moreText: document.getElementById("more"),
    moreDiv: document.getElementById("moreDiv"),
    btnText: document.getElementById("myReadBtn"),
    inputForm: document.getElementById("inputForm"),
    addNumberForm: document.querySelector("#inputmainData"),
    fc: document.querySelector("#cal"),
    resultDiv: document.getElementById("HddResult"),
    clientName: document.getElementById("clientName"),
    tpiName: document.getElementById("tpiTypE"),
    pmcName: document.getElementById("TPIName"),
    contractorName: document.getElementById("contractorName"),
    projectName: document.getElementById("projectName"),
    hddDetails: document.getElementById("HDD_Detail"),
    otherInputs: {
        od: document.getElementById("od"),
        pipeThick: document.getElementById("pipeThick"),
        roc: document.getElementById("roc"),
        sectionLength: document.getElementById("SectionLength"),
        entryAngle: document.getElementById("EntryAngle"),
        exitAngle: document.getElementById("ExitAngle"),
        profileDepth: document.getElementById("ProfileDepth"),
        designPressure: document.getElementById("DesignPressure"),
        lengthODrill: document.getElementById("LengthODrill"),
        weightDrill: document.getElementById("WeightDrill"),
        weightReamer: document.getElementById("WeightReamer"),
        pipeMat: document.getElementById("PipeMat"),
    },
};

// Constants
const constants = {
    E: 210000000000, // Modulus of Elasticity
    d: 239,          // Co-efficient of Drag N/M2
    dm: 1150,        // Mud density Kg/m3
    dw: 1000,        // Water density Kg/M3
    ds: 7850,        // Steel density Kg/M3
    f: 0.36,         // Friction Coefficient in Downhole
    s: 0.2,          // Static Friction Coefficient on Roller
};

// Functionality

// Toggle read more/less
function toggleReadMore() {
    const { dots, moreText, moreDiv, btnText } = elements;
    const isExpanded = dots.style.display === "none";

    dots.style.display = isExpanded ? "inline" : "none";
    moreText.style.display = isExpanded ? "none" : "inline";
    moreDiv.style.display = isExpanded ? "none" : "inline";
    btnText.innerHTML = isExpanded ? "Read more" : "Read less";
}

// Input validation and result highlighting
function validateInput(input) {
    const labelId = `label_${input.id}`;
    const value = parseFloat(input.value);
    const isValid = value > 0.000001 && value <= 620;

    const label = document.getElementById(labelId);
    label.style.background = isValid ? "green" : "red";

    return isValid;
}

// Attach validation listeners
elements.addNumberForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
});

// Main calculation
function performCalculations() {
    const {
        od,
        pipeThick,
        roc,
        sectionLength,
        entryAngle,
        exitAngle,
        profileDepth,
        designPressure,
        lengthODrill,
        weightDrill,
        weightReamer,
        pipeMat,
    } = elements.otherInputs;

    const Do = parseFloat(od.value);
    const T = parseFloat(pipeThick.value) / 1000;
    const Di = Do - 2 * T;
    const R = parseFloat(roc.value);
    const L = parseFloat(sectionLength.value);
    const Q1 = parseFloat(entryAngle.value);
    const Q2 = parseFloat(exitAngle.value);
    const D = parseFloat(profileDepth.value);
    const p = parseFloat(designPressure.value) * 98066.5;
    const Ld = parseFloat(lengthODrill.value);
    const Wd = parseFloat(weightDrill.value);
    const Rw = parseFloat(weightReamer.value);
    const SMYS = parseFloat(pipeMat.value);

    const Wt = 0.785 * (Do ** 2 - Di ** 2) * 7850;
    const preTest = p * 1.5;

    // Additional Calculations
    const CSa = (Math.PI / 4) * (Do ** 2 - Di ** 2);
    const I = (Math.PI / 64) * (Do ** 4 - Di ** 4);
    const B = (Math.PI / 4) * Do ** 2 * constants.dm;
    const Wb = Wt - B;

    const bm = (constants.E * I) / R;
    const F1 = constants.f * Math.abs(Wb) * L * 9.806;
    const F2 = (4 * constants.f * bm) / (Math.PI / 360 * (Q1 * R + Q2 * R));
    const F3 = constants.d * Math.PI * Do * L;
    const totalPullingForce = F1 + F2 + F3;
    const totalLoad = 1.5 * (totalPullingForce / 9.81 + Wd * L + Rw);

    const stress = 0.9 * SMYS * 1000000 / 145.072; // Convert PSI to N/m2
    const bendingStress = (constants.E * Do) / (2 * R);
    const tensileStress = totalPullingForce / CSa;

    // Update Results
    const results = {
        Wt,
        Di,
        CSa,
        I,
        B,
        Wb,
        bm,
        F1,
        F2,
        F3,
        totalPullingForce,
        totalLoad,
        stress,
        bendingStress,
        tensileStress,
    };

    displayResults(results);
}

// Display calculated results
function displayResults(results) {
    const { resultDiv } = elements;

    resultDiv.style.display = "flex";
    Object.entries(results).forEach(([key, value]) => {
        document.querySelectorAll(`.${key}`).forEach((el) => {
            el.innerHTML = value.toFixed(2);
        });
    });
}

// Attach event listeners
elements.btnText.addEventListener("click", toggleReadMore);
elements.fc.addEventListener("click", performCalculations);
