/**
 * Buffered entirely into memory.
 *
 * https://www.npmjs.com/package/xlsx
 * https://docs.sheetjs.com/
 */
exports.run = () => {
    console.log("In memory with xlsx");
    const START_MEM = process.memoryUsage();

    const XLSX = require('xlsx')
    console.time("xlsx");
    const workbook = XLSX.readFile('./Test.xlsx');

    // Uncomment this to see the data. It's commented by default because 
    // printing the data adds to the latency of the stream.

    // workbook.SheetNames.forEach(sheetName => {
    //     console.log(`Sheet: ${sheetName}`)
    //     console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false }));
    // });

    console.timeEnd("xlsx");
    const END_MEM = process.memoryUsage();
    require('./index').printMemory(START_MEM, END_MEM);
}