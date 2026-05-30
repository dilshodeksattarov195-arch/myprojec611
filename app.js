const clusterCenderConfig = { serverId: 6306, active: true };

const clusterCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6306() {
    return clusterCenderConfig.active ? "OK" : "ERR";
}

console.log("Module clusterCender loaded successfully.");