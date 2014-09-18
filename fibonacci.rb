# find the sum of even fibonacci
# initial attempt 
a = [ 1, 2]
limit = 4_000_000
while a[-2] + a [-1] < limit
    a << a[-2] + a[-1]
end
sum = 0
a.each { |x| sum += x if x.even? }
puts sum 

# fibonacci finder in javascript 
fib = [];
fib[0] = 0
fib[1] = 1
for( var i = 2; i < 10; i ++) {
    fib[i] = fib[i-2] + fib[i-1];
}

# fibonacci finder in Ruby with recursive
def fib(n)
    return n if n < 2
    fib(n-1) + fib(n-2)
end