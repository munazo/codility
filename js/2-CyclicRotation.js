// https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

solution = (A, K) => {
	if (A.length < 1) { return []; }
	
	for(i = 0; i < K % A.length; i++) {
		A.unshift(A.pop());
	}
	
	return A;
}

console.log(solution([1,2,3], 4));