Here is the summary of the load test:

**System Configuration:**
- **CPU:** 8 cores (6 performance, 2 efficiency)
- **Memory:** 16 GB
- **Device:** MacBook Pro M1

[This](https://github.com/ballerina-platform/module-ballerina-graphql/pull/2067) improvement is aimed at reducing latency by parallelizing query execution within each request. To evaluate the impact, the following load test with a single-thread loop sending *N* requests was conducted. This configuration helps establish an average latency for a single request.

### Load Test Cases
The first 2 tests below used in-memory Ballerina tables as the data source.
1. **Case 1:** No simulated delay, *N = 1000*
   <table>
    <td>
     <center><b>sequential</b></center>
   <img width="800" alt="image" src="https://github.com/user-attachments/assets/a2e7ff23-4de3-489d-8889-096914a28a50">
    </td>
    <td>
       <center><b>parallel</b></center>
   <img width="800" alt="image" src="https://github.com/user-attachments/assets/f3d06be3-ead9-44ec-9c34-af71dd368fb3">
    </td>
   </table>

2. **Case 2:** Simulated network delay of 1 second per database call, *N = 100*  
   <table>
    <td>
     <center><b>sequential</b></center>
     <img width="801" alt="image" src="https://github.com/user-attachments/assets/3567fc8f-e596-4ea0-a08a-d7d798abc017">
         </td>
    <td>
      <center><b>parallel</b></center>
<img width="801" alt="image" src="https://github.com/user-attachments/assets/0bc485af-584a-4503-a9a5-9b50a43bd2aa">
    </td>
   </table>

3. **Case 3:** Tests with databases - Redshift and MongoDB (running in Docker containers) to assess latency when queries are executed on both databases.
<table>
    <td>
     <center><b>sequential</b></center>
<img width="801" alt="image" src="https://github.com/user-attachments/assets/931f3039-d09d-420f-a659-85ac28bd5c24">
    </td>
 <td>
  <center><b>parallel</b></center>
<img width="801" alt="image" src="https://github.com/user-attachments/assets/621956fa-fa33-46e3-87a2-13f6f3763ee6">
  </td>
   </table>



### Comparison
<img width="1231" alt="image" src="https://github.com/user-attachments/assets/1e30d4ae-0f78-4249-8619-c841ddd3d183">
In all three cases, the parallel improvement reduces latency.


### Additional Testing
A test with a large complex query, resulting in a substantially big response payload (around 12MB), to verify if there were any concurrency issues. The configuration for this test was:
- **Thread Count:** 10
- **Loop Count:** _N_=1000
<img width="833" alt="image" src="https://github.com/user-attachments/assets/2ec96d03-6efd-4193-b1c4-fbcda731b227">


As shown in the chart, no errors were encountered (no response assertion failure), indicating no concurrency issues were found during the testing process.

The Ballerina code, Jmeter scripts & reports can be found [here](https://github.com/MohamedSabthar/query-parallelization-load-test).
