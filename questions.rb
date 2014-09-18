
# checking a stirng is palindrome
str = "anna"

def check_palidrome(string)
    if string.kind_of?(String) && string.size >= 2
        if string.reverse == string
            1
        else
            0
        end
    else
        "Incorrect input!"
    end
end

check_palidrome(4)

# find the minimal missing number 
arr = [-1, 3, 6, -2, 7]
def find_min(something)
    if something.kind_of?(Array)
        result = something.sort.uniq
        i = 0
        while i < result.length do 
            if result[i + 1] - result[i] == 1
                i+= 1
            else        
                return result[i] + 1
                break
            end
        end
    else
        "Wrong input. Please enter an array"
    end
end

find_min('something')