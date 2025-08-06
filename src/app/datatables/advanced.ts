import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './advanced.html',
})
export class AdvancedDatatableComponent implements OnInit {
    loading = false;

    cols = [
        { field: 'id', title: 'ID', isUnique: true },
        { field: 'firstName', title: 'User' },
        { field: 'country', title: 'Country', sort: false },
        { field: 'email', title: 'Email' },
        { field: 'age', title: 'Progress', sort: false },
        { field: 'phone', title: 'Phone' },
        { field: 'rating', title: 'Rate', sort: false, minWidth: '120px', headerClass: 'justify-center', cellClass: 'justify-center' },
        { field: 'series', title: 'Progress', sort: false },
        { field: 'status', title: 'Status', sort: false },
    ];

    rows: any[] = []; // Dummy user data removed

    countryList = [
        { code: 'AE', name: 'United Arab Emirates' },
        { code: 'AR', name: 'Argentina' },
        { code: 'AT', name: 'Austria' },
        { code: 'AU', name: 'Australia' },
        { code: 'BE', name: 'Belgium' },
        { code: 'BG', name: 'Bulgaria' },
        { code: 'BN', name: 'Brunei' },
        { code: 'BR', name: 'Brazil' },
        { code: 'BY', name: 'Belarus' },
        { code: 'CA', name: 'Canada' },
        { code: 'CH', name: 'Switzerland' },
        { code: 'CL', name: 'Chile' },
        { code: 'CN', name: 'China' },
        { code: 'CO', name: 'Colombia' },
        { code: 'CZ', name: 'Czech Republic' },
        { code: 'DE', name: 'Germany' },
        { code: 'DK', name: 'Denmark' },
        { code: 'DZ', name: 'Algeria' },
        { code: 'EC', name: 'Ecuador' },
        { code: 'EG', name: 'Egypt' },
        { code: 'ES', name: 'Spain' },
        { code: 'FI', name: 'Finland' },
        { code: 'FR', name: 'France' },
        { code: 'GB', name: 'United Kingdom' },
        { code: 'GR', name: 'Greece' },
        { code: 'HK', name: 'Hong Kong' },
        { code: 'HR', name: 'Croatia' },
        { code: 'HU', name: 'Hungary' },
        { code: 'ID', name: 'Indonesia' },
        { code: 'IE', name: 'Ireland' },
        { code: 'IL', name: 'Israel' },
        { code: 'IN', name: 'India' },
        { code: 'IT', name: 'Italy' },
        { code: 'JO', name: 'Jordan' },
        { code: 'JP', name: 'Japan' },
        { code: 'KE', name: 'Kenya' },
        { code: 'KH', name: 'Cambodia' },
        { code: 'KR', name: 'South Korea' },
        { code: 'KZ', name: 'Kazakhstan' },
        { code: 'LA', name: 'Laos' },
        { code: 'LK', name: 'Sri Lanka' },
        { code: 'MA', name: 'Morocco' },
        { code: 'MM', name: 'Myanmar' },
        { code: 'MO', name: 'Macau' },
        { code: 'MX', name: 'Mexico' },
        { code: 'MY', name: 'Malaysia' },
        { code: 'NG', name: 'Nigeria' },
        { code: 'NL', name: 'Netherlands' },
        { code: 'NO', name: 'Norway' },
        { code: 'NZ', name: 'New Zealand' },
        { code: 'PE', name: 'Peru' },
        { code: 'PH', name: 'Philippines' },
        { code: 'PK', name: 'Pakistan' },
        { code: 'PL', name: 'Poland' },
        { code: 'PT', name: 'Portugal' },
        { code: 'QA', name: 'Qatar' },
        { code: 'RO', name: 'Romania' },
        { code: 'RS', name: 'Serbia' },
        { code: 'RU', name: 'Russia' },
        { code: 'SA', name: 'Saudi Arabia' },
        { code: 'SE', name: 'Sweden' },
        { code: 'SG', name: 'Singapore' },
        { code: 'SK', name: 'Slovakia' },
        { code: 'TH', name: 'Thailand' },
        { code: 'TN', name: 'Tunisia' },
        { code: 'TR', name: 'Turkey' },
        { code: 'TW', name: 'Taiwan' },
        { code: 'UK', name: 'Ukraine' },
        { code: 'UG', name: 'Uganda' },
        { code: 'US', name: 'United States' },
        { code: 'VN', name: 'Vietnam' },
        { code: 'ZA', name: 'South Africa' },
        { code: 'BA', name: 'Bosnia and Herzegovina' },
        { code: 'BD', name: 'Bangladesh' },
        { code: 'EE', name: 'Estonia' },
        { code: 'IQ', name: 'Iraq' },
        { code: 'LU', name: 'Luxembourg' },
        { code: 'LV', name: 'Latvia' },
        { code: 'MK', name: 'North Macedonia' },
        { code: 'SI', name: 'Slovenia' },
        { code: 'PA', name: 'Panama' },
    ];

    chartOptions: any;

    ngOnInit() {
        this.loading = true;

        this.chartOptions = {
            series: [{ data: [21, 9, 36, 12, 44, 25, 59] }],
            chart: { height: 30, type: 'line', sparkline: { enabled: true } },
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: [4, 7], strokeWidth: 0 },
            colors: [this.randomColor()],
            grid: { padding: { top: 5, bottom: 5 } },
            tooltip: {
                x: { show: false },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        };

        // You can push dummy rows if needed to test UI behavior
        this.rows = [
            {
                id: 1,
                firstName: 'Demo',
                lastName: 'User',
                email: 'demo@example.com',
                country: 'India',
                phone: '+91 9876543210',
            }
        ].map((row) => {
            return {
                ...row,
                age: this.getRandomNumber(15, 100),
                status: this.randomStatus(),
                statusColor: this.randomStatusColor(),
                rating: this.getRandomNumber(1, 5),
            };
        });

        this.loading = false;
    }

    getStarArray(rating: number): number[] {
        return Array.from({ length: rating }, (_, i) => i);
    }

    randomColor() {
        const color = ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3'];
        return color[Math.floor(Math.random() * color.length)];
    }

    randomStatusColor() {
        const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        return color[Math.floor(Math.random() * color.length)];
    }

    randomStatus() {
        const status = ['PAID', 'APPROVED', 'FAILED', 'CANCEL', 'SUCCESS', 'PENDING', 'COMPLETE'];
        return status[Math.floor(Math.random() * status.length)];
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCountryCode(country: string): string | undefined {
        return this.countryList.find((d) => d.name.toLowerCase() === country.toLowerCase())?.code;
    }
}
