// a*a + b*b = c*c
// Euclid Pythagorean TRiplets fromula for primative
// (m2-n2)2 + (2m*n)2 = (m2+n2)2 where m>n, m and n are coprime, and one of m and n is even.
// d(m2-n2)2 + d(2m*n)2 = d(m2+n2)2 
// with m > n > 0, m and n being coprimes and exactly one of m and n even. d is the greatest common divisor of a, b and c

// a + b+ c = s = d(m2-n2) + 2d*m*n + d(m2+n2) = 2m(m+n)d
// k = m+n such that k is a divisor to s/(2m)
// and m < k < 2m, k < s/(2m), k is odd and gcd(m.k) = 1;