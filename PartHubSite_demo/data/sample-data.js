/**
 * Sample data for HinoPartWeb Demo
 * This file contains dummy data for demonstration purposes
 */

const SAMPLE_DATA = {
    // Sample dealers
    dealers: [
        {
            id: 1,
            name: 'Saigon Hino Center',
            code: 'SHC-001',
            city: 'Ho Chi Minh City',
            region: 'South'
        },
        {
            id: 2,
            name: 'Hanoi Hino Motors',
            code: 'HNM-002',
            city: 'Hanoi',
            region: 'North'
        },
        {
            id: 3,
            name: 'Da Nang Hino Service',
            code: 'DNS-003',
            city: 'Da Nang',
            region: 'Central'
        },
        {
            id: 4,
            name: 'Can Tho Hino Parts',
            code: 'CHP-004',
            city: 'Can Tho',
            region: 'Mekong'
        },
        {
            id: 5,
            name: 'Hai Phong Hino Trucks',
            code: 'HHT-005',
            city: 'Hai Phong',
            region: 'North East'
        }
    ],

    // Sample parts (automotive parts)
    parts: [
        {
            id: 'P001',
            name: 'Engine Oil Filter',
            name_vn: 'Bộ lọc dầu động cơ',
            part_number: 'ENG-OIL-001',
            description: 'Original Hino engine oil filter for long-term engine protection',
            stock: '145',
            price: '$15.50',
            category: 'Engine Maintenance'
        },
        {
            id: 'P002',
            name: 'Transmission Fluid',
            name_vn: 'Dầu hộp số',
            part_number: 'TRN-FLD-002',
            description: 'Premium transmission fluid for smooth gear shifting',
            stock: '98',
            price: '$25.00',
            category: 'Transmission'
        },
        {
            id: 'P003',
            name: 'Brake Pads Set',
            name_vn: 'Bộ má phanh',
            part_number: 'BRK-PAD-003',
            description: 'High-performance brake pads with excellent stopping power',
            stock: '234',
            price: '$45.75',
            category: 'Braking System'
        },
        {
            id: 'P004',
            name: 'Air Filter',
            name_vn: 'Bộ lọc không khí',
            part_number: 'AIR-FLT-004',
            description: 'Original air filter ensures engine breathes clean air',
            stock: '187',
            price: '$12.30',
            category: 'Engine Maintenance'
        },
        {
            id: 'P005',
            name: 'Fuel Pump',
            name_vn: 'Bơm xăng',
            part_number: 'FUL-PMP-005',
            description: 'Reliable fuel pump for consistent fuel delivery',
            stock: '56',
            price: '$120.00',
            category: 'Fuel System'
        },
        {
            id: 'P006',
            name: 'Radiator Hose',
            name_vn: 'Dây tản nhiệt',
            part_number: 'RAD-HSE-006',
            description: 'Heavy-duty radiator hose for efficient cooling',
            stock: '203',
            price: '$18.50',
            category: 'Cooling System'
        },
        {
            id: 'P007',
            name: 'Battery 12V 150Ah',
            name_vn: 'Pin 12V 150Ah',
            part_number: 'BAT-12V-007',
            description: 'High-capacity battery for powerful engine starting',
            stock: '74',
            price: '$185.00',
            category: 'Electrical'
        },
        {
            id: 'P008',
            name: 'Spark Plugs (Set of 6)',
            name_vn: 'Bộ bugi (6 cái)',
            part_number: 'SPK-PLG-008',
            description: 'Premium spark plugs for efficient ignition',
            stock: '165',
            price: '$35.50',
            category: 'Electrical'
        },
        {
            id: 'P009',
            name: 'Suspension Spring',
            name_vn: 'Lò xo treo',
            part_number: 'SUS-SPR-009',
            description: 'Durable suspension spring for smooth ride',
            stock: '42',
            price: '$95.00',
            category: 'Suspension'
        },
        {
            id: 'P010',
            name: 'Belts and Hoses Kit',
            name_vn: 'Bộ dây curoa và ống',
            part_number: 'BEL-HSE-010',
            description: 'Complete belt and hose replacement kit',
            stock: '89',
            price: '$65.00',
            category: 'Engine Maintenance'
        },
        {
            id: 'P011',
            name: 'Shock Absorber Pair',
            name_vn: 'Cặp giảm xóc',
            part_number: 'SHK-ABS-011',
            description: 'High-quality shock absorbers for better handling',
            stock: '78',
            price: '$250.00',
            category: 'Suspension'
        },
        {
            id: 'P012',
            name: 'Exhaust Manifold Gasket',
            name_vn: 'Gioăng đa hướng xả',
            part_number: 'EXH-MGK-012',
            description: 'Prevents exhaust gas leaks',
            stock: '156',
            price: '$28.75',
            category: 'Exhaust System'
        }
    ],

    // Sample staff members
    staff: [
        {
            id: 1,
            name: 'Nguyen Thanh Long',
            gender: 'Male',
            position: 'Sales Manager',
            dealer: 'Saigon Hino Center',
            email: 'long.nguyen@saigonhino.com',
            phone: '0901234567',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Pham Thi Lan',
            gender: 'Female',
            position: 'Parts Specialist',
            dealer: 'Saigon Hino Center',
            email: 'lan.pham@saigonhino.com',
            phone: '0912345678',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Tran Van Duc',
            gender: 'Male',
            position: 'Warehouse Manager',
            dealer: 'Hanoi Hino Motors',
            email: 'duc.tran@hanoihino.com',
            phone: '0923456789',
            status: 'Active'
        },
        {
            id: 4,
            name: 'Le Thi Huong',
            gender: 'Female',
            position: 'Customer Service',
            dealer: 'Da Nang Hino Service',
            email: 'huong.le@danang-hino.com',
            phone: '0934567890',
            status: 'Active'
        },
        {
            id: 5,
            name: 'Hoang Van Minh',
            gender: 'Male',
            position: 'Mechanic',
            dealer: 'Can Tho Hino Parts',
            email: 'minh.hoang@canhino.com',
            phone: '0945678901',
            status: 'Active'
        },
        {
            id: 6,
            name: 'Bui Thi Thu',
            gender: 'Female',
            position: 'Sales Executive',
            dealer: 'Hai Phong Hino Trucks',
            email: 'thu.bui@haiphonghino.com',
            phone: '0956789012',
            status: 'Active'
        },
        {
            id: 7,
            name: 'Dang Anh Tuan',
            gender: 'Male',
            position: 'Technical Support',
            dealer: 'Saigon Hino Center',
            email: 'tuan.dang@saigonhino.com',
            phone: '0967890123',
            status: 'Active'
        },
        {
            id: 8,
            name: 'Vu Thi My Linh',
            gender: 'Female',
            position: 'Inventory Control',
            dealer: 'Hanoi Hino Motors',
            email: 'linh.vu@hanoihino.com',
            phone: '0978901234',
            status: 'On Leave'
        }
    ],

    // Sample training records
    trainingRecords: [
        {
            id: 1,
            staffId: 1,
            staffName: 'Nguyen Thanh Long',
            course: 'Advanced Parts Identification',
            provider: 'Hino Academy',
            completedDate: '2024-02-15',
            certificateNumber: 'CERT-2024-001',
            status: 'Certified'
        },
        {
            id: 2,
            staffId: 2,
            staffName: 'Pham Thi Lan',
            course: 'Customer Service Excellence',
            provider: 'Hino Academy',
            completedDate: '2024-01-20',
            certificateNumber: 'CERT-2024-002',
            status: 'Certified'
        },
        {
            id: 3,
            staffId: 3,
            staffName: 'Tran Van Duc',
            course: 'Warehouse Management System',
            provider: 'Hino Academy',
            completedDate: '2023-12-10',
            certificateNumber: 'CERT-2024-003',
            status: 'Certified'
        },
        {
            id: 4,
            staffId: 4,
            staffName: 'Le Thi Huong',
            course: 'Technical English for Automotive',
            provider: 'Language Institute',
            completedDate: '2024-03-05',
            certificateNumber: 'CERT-2024-004',
            status: 'Certified'
        },
        {
            id: 5,
            staffId: 1,
            staffName: 'Nguyen Thanh Long',
            course: 'Sales Techniques & Negotiation',
            provider: 'Hino Academy',
            completedDate: '2024-03-22',
            certificateNumber: 'CERT-2024-005',
            status: 'Certified'
        },
        {
            id: 6,
            staffId: 5,
            staffName: 'Hoang Van Minh',
            course: 'Engine Maintenance & Repair',
            provider: 'Hino Academy',
            completedDate: '2024-02-28',
            certificateNumber: 'CERT-2024-006',
            status: 'Certified'
        }
    ],

    // Sample lost sales
    lostSales: [
        {
            id: 1,
            date: '2024-03-18',
            dealership: 'Saigon Hino Center',
            customerName: 'ABC Garage & Repairs',
            contactPerson: 'Mr. Tuan',
            phone: '0801234567',
            partName: 'Fuel Pump',
            partNumber: 'FUL-PMP-005',
            quantity: 1,
            reason: 'Out of Stock',
            estimatedValue: '$120.00',
            notes: 'Customer will return next week'
        },
        {
            id: 2,
            date: '2024-03-17',
            dealership: 'Hanoi Hino Motors',
            customerName: 'XYZ Motors Ltd',
            contactPerson: 'Ms. Hoa',
            phone: '0912987654',
            partName: 'Brake Pads Set',
            partNumber: 'BRK-PAD-003',
            quantity: 3,
            reason: 'Price Too High',
            estimatedValue: '$137.25',
            notes: 'Customer found cheaper alternative'
        },
        {
            id: 3,
            date: '2024-03-16',
            dealership: 'Da Nang Hino Service',
            customerName: 'Central Truck Service',
            contactPerson: 'Mr. Long',
            phone: '0901112223',
            partName: 'Shock Absorber Pair',
            partNumber: 'SHK-ABS-011',
            quantity: 2,
            reason: 'Delivery Time Too Long',
            estimatedValue: '$500.00',
            notes: 'Needed same-day delivery'
        },
        {
            id: 4,
            date: '2024-03-15',
            dealership: 'Can Tho Hino Parts',
            customerName: 'Mekong Transport Co.',
            contactPerson: 'Mr. Tan',
            phone: '0923334445',
            partName: 'Transmission Fluid',
            partNumber: 'TRN-FLD-002',
            quantity: 5,
            reason: 'Not Specified',
            estimatedValue: '$125.00',
            notes: 'Customer did not provide reason'
        },
        {
            id: 5,
            date: '2024-03-14',
            dealership: 'Hai Phong Hino Trucks',
            customerName: 'Red River Logistics',
            contactPerson: 'Ms. Linh',
            phone: '0934445556',
            partName: 'Battery 12V 150Ah',
            partNumber: 'BAT-12V-007',
            quantity: 1,
            reason: 'Quality Concerns',
            estimatedValue: '$185.00',
            notes: 'Customer preferred competitor brand'
        },
        {
            id: 6,
            date: '2024-03-13',
            dealership: 'Saigon Hino Center',
            customerName: 'Southern Fleet Management',
            contactPerson: 'Mr. Tram',
            phone: '0945556667',
            partName: 'Air Filter',
            partNumber: 'AIR-FLT-004',
            quantity: 10,
            reason: 'Out of Stock',
            estimatedValue: '$123.00',
            notes: 'Bulk order, customer will wait 2 days'
        }
    ],

    // Sample users/demo accounts
    users: [
        {
            username: 'demo_manager',
            fullName: 'Manager Demo Account',
            dealer: 'Saigon Hino Center',
            role: 'Manager',
            email: 'demo.manager@hinoparthub.com'
        },
        {
            username: 'demo_staff',
            fullName: 'Staff Demo Account',
            dealer: 'Hanoi Hino Motors',
            role: 'Staff',
            email: 'demo.staff@hinoparthub.com'
        },
        {
            username: 'demo_admin',
            fullName: 'Admin Demo Account',
            dealer: 'System Admin',
            role: 'Administrator',
            email: 'demo.admin@hinoparthub.com'
        }
    ],

    // Summary statistics
    statistics: {
        totalDealers: 5,
        totalParts: 12,
        totalStaff: 8,
        totalTrainingRecords: 6,
        lostSalesCount: 6,
        totalLostSalesValue: '$1,170.25',
        avgInventoryLevel: 126,
        activeUsers: 3,
        certifiedStaff: 6
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SAMPLE_DATA;
}
