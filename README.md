# NodeJS Parsing XLSX Example

The biggest challenge with Excel files is that they are actually compressed documents which make them difficult to process efficiently. Most parsers will need to unpack the entire file into memory in order to process it. That can be unacceptable for large Excel documents. 

This repository demonstrates two ways to parse an XLSX file with NodeJS. 

* [xlsx](https://www.npmjs.com/package/xlsx) - In memory parser
* [xlstream](https://www.npmjs.com/package/xlstream) - Streaming parser

The provided Test.xlsx file has 5000 rows, the results of both flows are shown below. 

| Memory | xlsx (in-memory) | xlstream (streaming) | 
| --- | --- | --- |
| rss | 77.14 MB | 15.26 MB |
| heapTotal | 50.9 MB | 8.55 MB |
| heapUsed | 35.18 MB | 3.32 MB |
| external | 10.03 MB | 0.5 MB |

Both took about **1.3 ms**. 

Computer Stats: 
* Intel(R) Core(TM) i7 CPU 920  @ 2.67GHz
* CPU(s): 8

## xlsx

Passing no arguments will execute the **xlsx** path.

```
$ node index.js 
In memory with xlsx
xlsx: 1352.611ms
starting process.memoryUsage:
   rss 29.13 MB
   heapTotal 4.43 MB
   heapUsed 2.52 MB
   external 0.8 MB

ending process.memoryUsage:
   rss 106.27 MB
   heapTotal 55.32 MB
   heapUsed 37.69 MB
   external 10.83 MB

calculated delta:
   rss 77.14 MB
   heapTotal 50.9 MB
   heapUsed 35.18 MB
   external 10.03 MB
```

## xlstream

Passing the single argument `stream` will execute the **xlstream** path.

```
$ node index.js stream
Streaming with xlstream ...
xlstream: 1385.652ms
starting process.memoryUsage:
   rss 29.12 MB
   heapTotal 4.43 MB
   heapUsed 2.52 MB
   external 0.8 MB

ending process.memoryUsage:
   rss 44.38 MB
   heapTotal 12.98 MB
   heapUsed 5.84 MB
   external 1.3 MB

calculated delta:
   rss 15.26 MB
   heapTotal 8.55 MB
   heapUsed 3.32 MB
   external 0.5 MB
```