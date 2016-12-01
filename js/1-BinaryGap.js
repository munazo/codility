// https://codility.com/programmers/lessons/1-iterations/binary_gap/start/

solution = (N) => {
	let two_dig = parseInt(N, 10).toString(2);
	let result = 0;

	two_dig = two_dig.replace(/0+$/, "");

	candidates = two_dig.split("1").filter((n)=>{
		if (result < n.length) {
			result = n.length;
		}

		n !== '';
		return n;
	});
	
	if (candidates.length < 1) {
		return 0;
	}

	return result;
}

s = solution(15);
console.log(s);