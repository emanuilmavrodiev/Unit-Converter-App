# Unit-Converter-App

A comprehensive web-based unit converter application supporting multiple unit categories with real-time conversion.

## Features

### Length/Distance Converter
The metric converter supports conversion between various unit systems:

#### Metric Units
- **Nanometers (nm)** - 1 nm = 1 × 10⁻⁹ m
- **Micrometers (μm)** - 1 μm = 1 × 10⁻⁶ m
- **Millimeters (mm)** - 1 mm = 0.001 m
- **Centimeters (cm)** - 1 cm = 0.01 m
- **Decimeters (dm)** - 1 dm = 0.1 m
- **Meters (m)** - Base metric unit
- **Kilometers (km)** - 1 km = 1000 m
- **Hectometers (hm)** - 1 hm = 100 m
- **Megameters (Mm)** - 1 Mm = 1,000,000 m

#### Imperial/US Customary Units
- **Inches (in)** - 1 in = 0.0254 m
- **Feet (ft)** - 1 ft = 0.3048 m
- **Yards (yd)** - 1 yd = 0.9144 m
- **Miles (mi)** - 1 mi = 1609.34 m

#### Nautical Units
- **Nautical Miles (nmi)** - 1 nmi = 1852 m

### Other Converters
- Weight/Mass Converter
- Temperature Converter
- Volume Converter
- Speed Converter

## Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No external dependencies

## File Structure
```
unit-converter-app/
├── unit-converter.html    # Main HTML file
├── unit-converter.css     # Styling
├── unit-converter.js      # Core functionality
└── README.md             # Documentation
```

## How to Use
1. Open `unit-converter.html` in a web browser
2. Select the type of conversion from the navigation menu
3. Enter the value you want to convert
4. Choose the source unit (From)
5. Choose the target unit (To)
6. The result displays automatically in real-time

## Conversion Accuracy
All conversions use standard SI (International System of Units) definitions:
- All length conversions are based on meters as the base unit
- Conversion factors are precise to standard definitions
- Results are displayed to 4 decimal places for precision

## Example Conversions
- 1 meter = 3.2808 feet
- 1 inch = 2.54 centimeters
- 1 mile = 1.6093 kilometers
- 1 kilometer = 0.6214 miles
- 1 foot = 304.8 millimeters

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- Add unit converter for area and volume
- Implement conversion history
- Add preset conversion buttons
- Dark mode theme
- Multi-language support

---
**Version:** 1.0.0  
**Last Updated:** January 17, 2026
