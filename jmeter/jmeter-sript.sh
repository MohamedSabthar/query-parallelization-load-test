#!/bin/bash
rm -rf ./parallel
jmeter -n -t GraphQL_HTTP_Request_with_Variables.jmx -l ./parallel/results.jtl -j ./parallel/parallel.log
jmeter -g ./parallel/results.jtl -o ./parallel/dashboard