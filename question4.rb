def is_palidrome(n)
	n.to_s == n.to_s.reverse
end

def highest_palidrome(high, low)
	if high.is_a?(Integer) && low.is_a?(Integer)
		max = 0
		low.upto(high) {
			|i| i.upto(high) {
				|j| p = i*j
				if is_palidrome(p) && p > max
					max = p 
				end
			}
		}
		puts max
	else
		puts "Plese input integer only"
	end
end

highest_palidrome(999,100)