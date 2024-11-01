Here is the summary of the load test:

**System Configuration:**
- **CPU:** 8 cores (6 performance, 2 efficiency)
- **Memory:** 16 GB
- **Device:** MacBook Pro M1

[This](https://github.com/ballerina-platform/module-ballerina-graphql/pull/2067) improvement is aimed at reducing latency by parallelizing query execution within each request. To evaluate the impact, the following load test with a single-thread loop sending *N* requests was conducted. This configuration helps establish an average latency for a single request.

### Load Test Cases
The first 2 tests below used in-memory Ballerina tables as the data source.
1. **Case 1:** No simulated delay, *N = 1000*  
  **sequencial:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/c8b95e19-c469-4811-a035-ac1c3777530a">
  **parallel:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/15c7eb1a-bc04-4e8f-9f52-91499f3e6588">

2. **Case 2:** Simulated network delay of 1 second per database call, *N = 100*  
  **sequencial:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/5eb9123b-cfdc-4c61-8d0e-b5ed0fbaecbb">
  **parallel:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/1f1986d0-bb60-441c-bdb8-0a9c2b6bbaab">

3. **Case 3:** Tests with databases - Redshift and MongoDB (running in Docker containers) to assess latency when queries are executed on both databases.
  **sequencial:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/b92108f4-38d4-47dd-a049-cfb4ba30bec2">
  **parallel:**<img width="1231" alt="image" src="https://github.com/user-attachments/assets/4d883e81-6392-42f0-9d39-3332e2e29a45">

<img width="1231" alt="image" src="https://github.com/user-attachments/assets/f72dddb3-1e67-452a-be8c-48062de55eb5">
In all three cases, the parallel improvement reduces latency.


### Additional Testing
A test with a large complex query, resulting in a substantially big response payload (around 12MB), to verify if there were any concurrency issues. The configuration for this test was:
- **Thread Count:** 10
- **Loop Count:** _N_=1000

<img width="1231" alt="image" src="https://github.com/user-attachments/assets/86f20da3-19d2-47e3-98f2-f9459354e957">


As shown in the chart, no errors were encountered (no response assertion failure), indicating no concurrency issues were found during the testing process.

The Ballerina code, Jmeter scripts & reports can be found [here](https://github.com/MohamedSabthar/query-parallelization-load-test).