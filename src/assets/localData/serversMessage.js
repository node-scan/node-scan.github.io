export default {
    serversData: [{
        id: "M3168",
        productModel: "168-M3",
        rom: "192TB",
        algorithm: "Crust/Phala",
        mainboard: "技嘉主板（支持SGX）",
        cpu: "6核6线程CPU（支持SGX）",
        ram: "16G*2",
        hardDisk: "8T 企业级硬盘*24",
        powerSupply: "ATX 电源",
        ssd: "512G",
        raidController: "RAID阵列卡",
        heatSink: "CPU散热器",
        crate: "4U 24盘位机箱",
        image: "/static/image/serversImage01.png",
        machineType: "crust"
    },
    {
        id: "M3168pro",
        productModel: "168-M3 Pro",
        rom: "384TB",
        algorithm: "Crust/Phala",
        mainboard: "技嘉主板（支持SGX）",
        cpu: "10核20线程CPU（支持SGX）",
        ram: "32G*2",
        hardDisk: "16T 企业级硬盘*24",
        powerSupply: "ATX 电源",
        ssd: "三星500G",
        raidController: "RAID阵列卡",
        heatSink: "CPU散热器",
        crate: "4U 24盘位机箱",
        image: "/static/image/serversImage01.png",
        machineType: "crust"
    },
    {
        id: "pha",
        productModel: "PHA服务器标准版（适用PHA单挖）",
        rom: "512G",
        algorithm: "Phala",
        mainboard: "高性能主板（支持SGX）",
        cpu: "10核CPU（支持SGX）",
        ram: "16G*2",
        powerSupply: "2U 电源",
        ssd: "512G",
        heatSink: "CPU散热器",
        crate: "2U 8盘位机箱",
        image: "/static/image/pha.png",
        machineType: "phala"
    },
    {
        id: "phaPro",
        productModel: "PHA服务器高配版（适用PHA、CRU双挖）",
        rom: "512G",
        algorithm: "Phala/Crust",
        mainboard: "高性能主板（支持SGX）",
        cpu: "10核CPU（支持SGX）",
        ram: "32G",
        powerSupply: "4U 电源",
        ssd: "512G",
        heatSink: "CPU散热器",
        crate: "4U 24盘位机箱",
        raidController: "RAID阵列卡",
        image: "/static/image/pha.png",
        machineType: "phala"
    },
    ]
}