// Unit Converter App - JavaScript
// This file will contain the core functionality for unit conversions

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Unit Converter App Initialized');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const converterSection = document.getElementById('converter-section');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the conversion type
            const conversionType = this.getAttribute('href').substring(1);
            
            // Load the appropriate converter
            loadConverter(conversionType);
        });
    });
    
    // Load the default converter (Length)
    loadConverter('length');
});

/**
 * Load the converter for a specific conversion type
 * @param {string} type - The type of conversion (length, weight, temperature, volume, speed, currency)
 */
function loadConverter(type) {
    const converterSection = document.getElementById('converter-section');
    let content = '';
    
    switch(type) {
        case 'length':
            content = createLengthConverter();
            break;
        case 'weight':
            content = createWeightConverter();
            break;
        case 'temperature':
            content = createTemperatureConverter();
            break;
        case 'volume':
            content = createVolumeConverter();
            break;
        case 'speed':
            content = createSpeedConverter();
            break;
        case 'currency':
            content = createCurrencyConverter();
            break;
        default:
            content = '<h2>Select a conversion type</h2>';
    }
    
    converterSection.innerHTML = content;
    
    // Attach event listeners to the newly created elements
    attachConverterListeners(type);
}

/**
 * Create the HTML for the length converter
 */
function createLengthConverter() {
    return `
        <h2>Length / Distance Converter</h2>
        <p class="converter-description">Convert between metric and imperial length units</p>
        <div class="converter-box">
            <div class="input-group">
                <label for="length-input">Value:</label>
                <input type="number" id="length-input" placeholder="Enter value" value="1">
            </div>
            <div class="input-group">
                <label for="length-from">From:</label>
                <select id="length-from">
                    <!-- Metric Units -->
                    <optgroup label="Metric">
                        <option value="millimeters">Millimeters (mm)</option>
                        <option value="centimeters">Centimeters (cm)</option>
                        <option value="meters">Meters (m)</option>
                        <option value="kilometers">Kilometers (km)</option>
                    </optgroup>
                    <!-- Imperial Units -->
                    <optgroup label="Imperial">
                        <option value="inches">Inches (in)</option>
                        <option value="feet">Feet (ft)</option>
                        <option value="yards">Yards (yd)</option>
                        <option value="miles">Miles (mi)</option>
                    </optgroup>
                    <!-- Nautical -->
                    <optgroup label="Nautical">
                        <option value="nautical-miles">Nautical Miles (nmi)</option>
                    </optgroup>
                    <!-- Other Units -->
                    <optgroup label="Other">
                        <option value="micrometers">Micrometers (μm)</option>
                        <option value="nanometers">Nanometers (nm)</option>
                    </optgroup>
                </select>
            </div>
            <div class="input-group">
                <label for="length-to">To:</label>
                <select id="length-to">
                    <!-- Metric Units -->
                    <optgroup label="Metric">
                        <option value="millimeters">Millimeters (mm)</option>
                        <option value="centimeters">Centimeters (cm)</option>
                        <option value="meters">Meters (m)</option>
                        <option value="kilometers">Kilometers (km)</option>
                    </optgroup>
                    <!-- Imperial Units -->
                    <optgroup label="Imperial">
                        <option value="inches">Inches (in)</option>
                        <option value="feet">Feet (ft)</option>
                        <option value="yards">Yards (yd)</option>
                        <option value="miles">Miles (mi)</option>
                    </optgroup>
                    <!-- Nautical -->
                    <optgroup label="Nautical">
                        <option value="nautical-miles">Nautical Miles (nmi)</option>
                    </optgroup>
                    <!-- Other Units -->
                    <optgroup label="Other">
                        <option value="micrometers">Micrometers (μm)</option>
                        <option value="nanometers">Nanometers (nm)</option>
                    </optgroup>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="length-result" class="result">0</div>
            </div>
        </div>
    `;
}

/**
 * Create the HTML for the weight converter
 */
function createWeightConverter() {
    return `
        <h2>Weight Converter</h2>
        <div class="converter-box">
            <div class="input-group">
                <label for="weight-input">Value:</label>
                <input type="number" id="weight-input" placeholder="Enter value" value="1">
            </div>
            <div class="input-group">
                <label for="weight-from">From:</label>
                <select id="weight-from">
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="pounds">Pounds</option>
                    <option value="ounces">Ounces</option>
                    <option value="tons">Tons</option>
                    <option value="milligrams">Milligrams</option>
                </select>
            </div>
            <div class="input-group">
                <label for="weight-to">To:</label>
                <select id="weight-to">
                    <option value="pounds">Pounds</option>
                    <option value="kilograms">Kilograms</option>
                    <option value="grams">Grams</option>
                    <option value="ounces">Ounces</option>
                    <option value="tons">Tons</option>
                    <option value="milligrams">Milligrams</option>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="weight-result" class="result">0</div>
            </div>
        </div>
    `;
}

/**
 * Create the HTML for the temperature converter
 */
function createTemperatureConverter() {
    return `
        <h2>Temperature Converter</h2>
        <div class="converter-box">
            <div class="input-group">
                <label for="temp-input">Value:</label>
                <input type="number" id="temp-input" placeholder="Enter value" value="0">
            </div>
            <div class="input-group">
                <label for="temp-from">From:</label>
                <select id="temp-from">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            <div class="input-group">
                <label for="temp-to">To:</label>
                <select id="temp-to">
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="celsius">Celsius</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="temp-result" class="result">0</div>
            </div>
        </div>
    `;
}

/**
 * Create the HTML for the volume converter
 */
function createVolumeConverter() {
    return `
        <h2>Volume Converter</h2>
        <div class="converter-box">
            <div class="input-group">
                <label for="volume-input">Value:</label>
                <input type="number" id="volume-input" placeholder="Enter value" value="1">
            </div>
            <div class="input-group">
                <label for="volume-from">From:</label>
                <select id="volume-from">
                    <option value="liters">Liters</option>
                    <option value="milliliters">Milliliters</option>
                    <option value="gallons">Gallons</option>
                    <option value="cups">Cups</option>
                    <option value="cubic-meters">Cubic Meters</option>
                    <option value="fluid-ounces">Fluid Ounces</option>
                </select>
            </div>
            <div class="input-group">
                <label for="volume-to">To:</label>
                <select id="volume-to">
                    <option value="gallons">Gallons</option>
                    <option value="liters">Liters</option>
                    <option value="milliliters">Milliliters</option>
                    <option value="cups">Cups</option>
                    <option value="cubic-meters">Cubic Meters</option>
                    <option value="fluid-ounces">Fluid Ounces</option>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="volume-result" class="result">0</div>
            </div>
        </div>
    `;
}

/**
 * Create the HTML for the speed converter
 */
function createSpeedConverter() {
    return `
        <h2>Speed Converter</h2>
        <div class="converter-box">
            <div class="input-group">
                <label for="speed-input">Value:</label>
                <input type="number" id="speed-input" placeholder="Enter value" value="1">
            </div>
            <div class="input-group">
                <label for="speed-from">From:</label>
                <select id="speed-from">
                    <option value="kmh">Kilometers per Hour</option>
                    <option value="mph">Miles per Hour</option>
                    <option value="mps">Meters per Second</option>
                    <option value="knots">Knots</option>
                </select>
            </div>
            <div class="input-group">
                <label for="speed-to">To:</label>
                <select id="speed-to">
                    <option value="mph">Miles per Hour</option>
                    <option value="kmh">Kilometers per Hour</option>
                    <option value="mps">Meters per Second</option>
                    <option value="knots">Knots</option>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="speed-result" class="result">0</div>
            </div>
        </div>
    `;
}

/**
 * Create the HTML for the currency converter
 */
function createCurrencyConverter() {
    return `
        <h2>Currency Converter</h2>
        <p class="converter-description">Real-time currency conversion with live exchange rates</p>
        <div class="currency-status" id="currency-status">
            <span class="loading">📡 Fetching exchange rates...</span>
        </div>
        <div class="converter-box">
            <div class="input-group">
                <label for="currency-input">Amount:</label>
                <input type="number" id="currency-input" placeholder="Enter amount" value="1">
            </div>
            <div class="input-group">
                <label for="currency-from">From:</label>
                <select id="currency-from">
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="CHF">Swiss Franc (CHF)</option>
                    <option value="CNY">Chinese Yuan (CNY)</option>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="MXN">Mexican Peso (MXN)</option>
                </select>
            </div>
            <div class="input-group">
                <label for="currency-to">To:</label>
                <select id="currency-to">
                    <option value="EUR">Euro (EUR)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="CHF">Swiss Franc (CHF)</option>
                    <option value="CNY">Chinese Yuan (CNY)</option>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="MXN">Mexican Peso (MXN)</option>
                </select>
            </div>
            <div class="result-group">
                <label>Result:</label>
                <div id="currency-result" class="result">0</div>
                <div class="exchange-rate" id="exchange-rate-display"></div>
            </div>
        </div>
    `;
}

/**
 * Attach event listeners to converter inputs
 * @param {string} type - The type of converter
 */
function attachConverterListeners(type) {
    // Handle currency converter separately due to async API calls
    if (type === 'currency') {
        attachCurrencyConverterListeners();
        return;
    }
    
    const inputId = `${type}-input`;
    const fromId = `${type}-from`;
    const toId = `${type}-to`;
    const resultId = `${type}-result`;
    
    const input = document.getElementById(inputId);
    const fromSelect = document.getElementById(fromId);
    const toSelect = document.getElementById(toId);
    const resultDiv = document.getElementById(resultId);
    
    if (!input || !fromSelect || !toSelect || !resultDiv) {
        console.error(`Missing elements for ${type} converter`);
        return;
    }
    
    // Add event listeners for real-time conversion
    input.addEventListener('input', () => performConversion(type));
    fromSelect.addEventListener('change', () => performConversion(type));
    toSelect.addEventListener('change', () => performConversion(type));
    
    // Perform initial conversion
    performConversion(type);
}

/**
 * Perform the conversion based on type
 * @param {string} type - The type of conversion
 */
function performConversion(type) {
    const inputId = `${type}-input`;
    const fromId = `${type}-from`;
    const toId = `${type}-to`;
    const resultId = `${type}-result`;
    
    const input = document.getElementById(inputId);
    const fromSelect = document.getElementById(fromId);
    const toSelect = document.getElementById(toId);
    const resultDiv = document.getElementById(resultId);
    
    const value = parseFloat(input.value) || 0;
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;
    
    let result = 0;
    
    // Call the appropriate conversion function
    switch(type) {
        case 'length':
            result = convertLength(value, fromUnit, toUnit);
            break;
        case 'weight':
            result = convertWeight(value, fromUnit, toUnit);
            break;
        case 'temperature':
            result = convertTemperature(value, fromUnit, toUnit);
            break;
        case 'volume':
            result = convertVolume(value, fromUnit, toUnit);
            break;
        case 'speed':
            result = convertSpeed(value, fromUnit, toUnit);
            break;
    }
    
    // Display the result with 4 decimal places
    resultDiv.textContent = result.toFixed(4);
}

/**
 * Conversion functions for different unit types
 */

function convertLength(value, from, to) {
    // Convert everything to meters (the base SI unit) first
    const meters = {
        // Metric Units
        'nanometers': 1e-9,           // 1 nm = 1 × 10^-9 m
        'micrometers': 1e-6,          // 1 μm = 1 × 10^-6 m
        'millimeters': 0.001,         // 1 mm = 0.001 m
        'centimeters': 0.01,          // 1 cm = 0.01 m
        'decimeters': 0.1,            // 1 dm = 0.1 m
        'meters': 1,                  // Base unit
        'kilometers': 1000,           // 1 km = 1000 m
        
        // Imperial Units
        'inches': 0.0254,             // 1 in = 0.0254 m
        'feet': 0.3048,               // 1 ft = 0.3048 m
        'yards': 0.9144,              // 1 yd = 0.9144 m
        'miles': 1609.34,             // 1 mi = 1609.34 m
        
        // Nautical Units
        'nautical-miles': 1852,       // 1 nmi = 1852 m
        
        // Other metric units
        'hectometers': 100,           // 1 hm = 100 m
        'megameters': 1000000,        // 1 Mm = 1,000,000 m
    };
    
    if (!meters[from] || !meters[to]) return 0;
    const valueInMeters = value * meters[from];
    return valueInMeters / meters[to];
}

function convertWeight(value, from, to) {
    // Convert everything to kilograms first
    const kilograms = {
        'kilograms': 1,
        'grams': 0.001,
        'pounds': 0.453592,
        'ounces': 0.0283495,
        'tons': 1000,
        'milligrams': 0.000001
    };
    
    if (!kilograms[from] || !kilograms[to]) return 0;
    const valueInKg = value * kilograms[from];
    return valueInKg / kilograms[to];
}

function convertTemperature(value, from, to) {
    let celsius;
    
    // Convert to Celsius first
    if (from === 'celsius') {
        celsius = value;
    } else if (from === 'fahrenheit') {
        celsius = (value - 32) * 5 / 9;
    } else if (from === 'kelvin') {
        celsius = value - 273.15;
    }
    
    // Convert from Celsius to target unit
    if (to === 'celsius') {
        return celsius;
    } else if (to === 'fahrenheit') {
        return celsius * 9 / 5 + 32;
    } else if (to === 'kelvin') {
        return celsius + 273.15;
    }
    
    return 0;
}

function convertVolume(value, from, to) {
    // Convert everything to liters first
    const liters = {
        'liters': 1,
        'milliliters': 0.001,
        'gallons': 3.78541,
        'cups': 0.236588,
        'cubic-meters': 1000,
        'fluid-ounces': 0.0295735
    };
    
    if (!liters[from] || !liters[to]) return 0;
    const valueInLiters = value * liters[from];
    return valueInLiters / liters[to];
}

function convertSpeed(value, from, to) {
    // Convert everything to km/h first
    const kmh = {
        'kmh': 1,
        'mph': 1.60934,
        'mps': 3.6,
        'knots': 1.852
    };
    
    if (!kmh[from] || !kmh[to]) return 0;
    const valueInKmh = value * kmh[from];
    return valueInKmh / kmh[to];
}

/**
 * Store for exchange rates (cached)
 */
let exchangeRates = null;
let lastRatesFetchTime = null;

/**
 * Fetch exchange rates from free API
 * Using exchangerate-api.com (free tier)
 */
async function fetchExchangeRates() {
    // Use cached rates if they're less than 1 hour old
    if (exchangeRates && lastRatesFetchTime) {
        const timeSinceLastFetch = Date.now() - lastRatesFetchTime;
        if (timeSinceLastFetch < 3600000) { // 1 hour in milliseconds
            return exchangeRates;
        }
    }
    
    try {
        // Using exchangerate-api.com with USD as base (free tier supports USD)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        
        const data = await response.json();
        exchangeRates = data.rates;
        lastRatesFetchTime = Date.now();
        
        // Update status
        const statusElement = document.getElementById('currency-status');
        if (statusElement) {
            statusElement.innerHTML = '<span class="success">✓ Rates updated: ' + new Date().toLocaleTimeString() + '</span>';
        }
        
        return exchangeRates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        
        // Fallback to hardcoded rates if API fails
        const statusElement = document.getElementById('currency-status');
        if (statusElement) {
            statusElement.innerHTML = '<span class="warning">⚠ Using cached rates</span>';
        }
        
        // Hardcoded fallback rates (as of January 2026)
        return {
            'USD': 1,
            'EUR': 0.92,
            'GBP': 0.79,
            'JPY': 149.5,
            'AUD': 1.52,
            'CAD': 1.36,
            'CHF': 0.87,
            'CNY': 7.15,
            'INR': 83.12,
            'MXN': 17.05
        };
    }
}

/**
 * Convert currency using fetched rates
 */
async function convertCurrency(value, from, to) {
    const rates = await fetchExchangeRates();
    
    if (!rates[from] || !rates[to]) {
        return 0;
    }
    
    // Convert from source currency to USD, then to target currency
    const valueInUSD = value / rates[from];
    const result = valueInUSD * rates[to];
    
    return result;
}

/**
 * Attach listeners specifically for currency converter
 */
async function attachCurrencyConverterListeners() {
    const input = document.getElementById('currency-input');
    const fromSelect = document.getElementById('currency-from');
    const toSelect = document.getElementById('currency-to');
    
    if (!input || !fromSelect || !toSelect) {
        console.error('Missing currency converter elements');
        return;
    }
    
    // Fetch rates immediately
    await fetchExchangeRates();
    
    // Add event listeners
    input.addEventListener('input', () => performCurrencyConversion());
    fromSelect.addEventListener('change', () => performCurrencyConversion());
    toSelect.addEventListener('change', () => performCurrencyConversion());
    
    // Perform initial conversion
    await performCurrencyConversion();
}

/**
 * Perform currency conversion
 */
async function performCurrencyConversion() {
    const input = document.getElementById('currency-input');
    const fromSelect = document.getElementById('currency-from');
    const toSelect = document.getElementById('currency-to');
    const resultDiv = document.getElementById('currency-result');
    const rateDisplay = document.getElementById('exchange-rate-display');
    
    const value = parseFloat(input.value) || 0;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    
    const result = await convertCurrency(value, fromCurrency, toCurrency);
    
    // Display result
    resultDiv.textContent = result.toFixed(2);
    
    // Display exchange rate
    if (exchangeRates && exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        rateDisplay.textContent = `Rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
    }
}

