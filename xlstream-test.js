/**
 * Streaming version.
 * https://github.com/Claviz/xlstream
 */
exports.run = () => {
    console.log("Streaming with xlstream ...");
    const START_MEM = process.memoryUsage();
    console.time("xlstream");
    (async () => {
        const { getXlsxStream } = require('xlstream');
        const stream = await getXlsxStream({
            filePath: './Test.xlsx',
            sheet: 0,
            withHeader: true,
            ignoreEmpty: true
        });
        stream.on('data', x => {
            // Uncomment this to see the data. It's commented by default because 
            // printing the data adds to the latency of the stream.

            //console.log(x)
        });
        stream.on('end', (result) => {
            console.timeEnd("xlstream")
            const END_MEM = process.memoryUsage();
            require('./index').printMemory(START_MEM, END_MEM);
        });
    })();
};