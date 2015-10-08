#!/bin/bash

# sed -E 's/.+, //g'
# sed -E 's/[0-9]{5,10}//g'

gnuplot -e "set title '$1 response times'; set xlabel 'iterations'; set ylabel 'response times'; set term png; set output '$1.png'; plot '$1'"
