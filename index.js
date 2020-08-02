exports.printMemory = (mem_start, mem_end) => {
    console.log("starting process.memoryUsage:")
    for (let key in mem_start) {
        console.log(`   ${key} ${Math.round(mem_start[key] / 1024 / 1024 * 100) / 100} MB`);
    }

    console.log("\nending process.memoryUsage:")
    for (let key in mem_end) {
        console.log(`   ${key} ${Math.round(mem_end[key] / 1024 / 1024 * 100) / 100} MB`);
    }

    const mem_delta = {
        rss: mem_end.rss - mem_start.rss,
        heapTotal: mem_end.heapTotal - mem_start.heapTotal,
        heapUsed: mem_end.heapUsed - mem_start.heapUsed,
        external: mem_end.external - mem_start.external
    }
    console.log("\ncalculated delta:")
    for (let key in mem_delta) {
        console.log(`   ${key} ${Math.round(mem_delta[key] / 1024 / 1024 * 100) / 100} MB`);
    }
}

if(process.argv[2] == 'stream'){
    require('./xlstream-test').run();
}else{
    require('./xlsx-test').run();
}