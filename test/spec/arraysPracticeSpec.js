describe('arraysPractice', function () {
	describe('first', function () {
		it('should exist', function () {
			expect(first).toBeDefined();
		})
		it('should be a function', function () {
			expect(first).toEqual(jasmine.any(Function));
		})
		it('should return the first value of a passed array', function () {
			var arr = [1, 2, 3];
			expect(first(arr)).toBe(1);
			expect(first([])).not.toBeDefined();
		})
	})
	describe('last', function () {
		it('should exist', function () {
			expect(last).toBeDefined();
		})
		it('should be a function', function () {
			expect(last).toEqual(jasmine.any(Function));
		})
		it('should return the last value of a passed array', function () {
			var arr = [1, 2, 3];
			expect(last(arr)).toBe(3);
			expect(last([])).not.toBeDefined();
		})
	})
	describe('looper', function () {
		it('should exist', function () {
			expect(looper).toBeDefined();
		})
		it('should call alert once for each item in the array', function () {
			var alert = spyOn(window, 'alert');
			var arr = [1, 2, 3];
			looper(arr);
			expect(alert.calls.count()).toBe(arr.length);
		})
		it('should call the items in order from first to last', function () {
			var alert = spyOn(window, 'alert');
			var arr = [1, 2, 3];
			looper(arr);
			for (var i = 0; i < arr.length; i++) {
				expect(alert.calls.argsFor(i)[0]).toBe(arr[i]);
			}
		})
	})
	describe('reversedLooper', function () {
		it('should exist', function () {
			expect(reversedLooper).toBeDefined();
		})
		it('should call alert once for each item in the array', function () {
			var alert = spyOn(window, 'alert');
			var arr = [1,2,3];
			reversedLooper(arr);
			expect(alert.calls.count()).toBe(arr.length);
		})
		it('should call the items in order from last to first', function () {
			var alert = spyOn(window, 'alert');
			var arr = [1, 2, 3];
			reversedLooper(arr);
			for (var i = 0; i < arr.length; i++) {
				expect(alert.calls.argsFor(i)[0]).toBe(arr[arr.length - 1 - i]);
			}
		})
	})
	describe('evenFinder', function () {
		it('should exist', function () {
			expect(evenFinder).toBeDefined();
		})
		it('should be a function', function () {
			expect(evenFinder).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(evenFinder([])).toEqual(jasmine.any(Array));
		})
		it('should return an array with only even numbers', function () {
			var arr = [1, 2, 3, 4, 5, 6];
			var evens = evenFinder(arr);
			expect(evens).toEqual([2, 4, 6]);
		})
	})
	describe('divider', function () {
		it('should exist', function () {
			expect(divider).toBeDefined();
		})
		it('should be a function', function () {
			expect(divider).toEqual(jasmine.any(Function));
		})
		it('should return an array of two arrays', function () {
			expect(divider([])).toEqual([jasmine.any(Array), jasmine.any(Array)])
		})
		it('should have even numbers in the first array and odd numbers in the second array', function () {
			var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			var divided = divider(arr);
			var expected = [[2, 4, 6, 8], [1, 3, 5, 7, 9]]
			expect(divided).toEqual(expected);
		})
	})
	describe('finder', function () {
		it('should exist', function () {
			expect(finder).toBeDefined();
		})
		it('should be a function', function () {
			expect(finder).toEqual(jasmine.any(Function));
		})
		it('should return a boolean', function () {
			expect(finder([])).toEqual(jasmine.any(Boolean));
		})
		it('should return true if the random number is found in the array', function () {
			var rand = spyOn(window, 'getRandomArbitrary').and.returnValue(3);
			var arr = [1, 2, 3];
			expect(finder(arr)).toBe(true);
		})
		it('should return false if the random number is not found in the array', function () {
			var rand = spyOn(window, 'getRandomArbitrary').and.returnValue(4);
			var arr = [1, 2, 3];
			expect(finder(arr)).toBe(false);
		})
	})
	// describe('reverse', function () {
	// 	it('should exist', function () {
	// 		expect(reverse).toBeDefined();
	// 	})
	// 	it('should be a function', function () {
	// 		expect(reverse).toEqual(jasmine.any(Function));
	// 	})
	// 	it('should return a string', function () {
	// 		expect(reverse('')).toEqual(jasmine.any(String));
	// 	})
	// 	it('should reverse the string passed to it', function () {
	// 		expect(reverse('abcd')).toEqual('dcba');
	// 	})
	// })
	describe('removeItem', function () {
		it('should exist', function () {
			expect(removeItem).toBeDefined();
		})
		it('should be a function', function () {
			expect(removeItem).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(removeItem([])).toEqual(jasmine.any(Array));
		})
		it('should remove an item from a groceryList array (if it is in the array)', function () {
			var groceryList = ['chips', 'soda', 'celery', 'pizza'];
			var item = 'chips'
			var expected = ['soda', 'celery', 'pizza']
			var itemExists = removeItem(groceryList, item);
			expect(itemExists).toEqual(expected);
		})
		it('should return the original list if the item is not in the list', function () {
			var groceryList = ['chips', 'soda', 'celery', 'pizza'];
			var item = 'mustard';
			var expected = groceryList;
			var itemDoesntExist = removeItem(groceryList, item);
			expect(itemDoesntExist).toEqual(expected);
		})

	})
	describe('addItem', function () {
		it('should exist', function () {
			expect(addItem).toBeDefined();
		})
		it('should be a function', function () {
			expect(addItem).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(addItem([])).toEqual(jasmine.any(Array));
		})
		it('should add an item to an array', function () {
			var groceryList = [];
			var item = 'pizza';
			var result = addItem(groceryList, item);
			expect(result).toEqual(['pizza']);
		})
	})
	describe('maker', function () {
		it('should exist', function () {
			expect(maker).toBeDefined();
		})
		it('should be a function', function () {
			expect(maker).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(maker()).toEqual(jasmine.any(Array));
		})
		it('should contain the numbers from 1 to 215', function () {
			var expected = function () {
				var arr = [];
				for (var i = 1; i < 216; i++) {
					arr.push(i);
				}
				return arr;
			} ();
			expect(maker()).toEqual(expected);
		})
	})
	describe('addTen', function () {
		it('should exist', function () {
			expect(addTen).toBeDefined();
		})
		it('should be a function', function () {
			expect(addTen).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(addTen([])).toEqual(jasmine.any(Array));
		})
		it('should add ten to each item in the array', function () {
			//could be passed numbers as numbers or strings
			var arr = [1, '2', 3];
			var expected = [11, 12, 13];
			expect(addTen(arr)).toEqual(expected);	
		})
	})
	describe('longer', function () {
		it('should exist', function () {
			expect(longer).toBeDefined();
		})
		it('should be a function', function () {
			expect(longer).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(longer([],[])).toEqual(jasmine.any(Array));
		})
		it('should return the longer of two arrays', function () {
			var short = [1, 2, 3];
			var long = [4, 5, 6, 7];
			expect(longer(short, long)).toEqual(long);
		})
	})
	describe('both', function () {
				it('should exist', function () {
			expect(both).toBeDefined();
		})
		it('should be a function', function () {
			expect(both).toEqual(jasmine.any(Function));
		})
		it('should return an array', function () {
			expect(both([],[])).toEqual(jasmine.any(Array));
		})
		it('should return an array of numbers that are in both passed arrays', function () {
			var firstArr = [1, 2, 3, 4];
			var secondArr = [2, 5, 6, 4];
			var expected = [2, 4];
			expect(both(firstArr, secondArr)).toEqual(expected);
		})
	})
	describe('devMountainEmployees', function () {
		it('should exist and contain items', function () {
			expect(devMountainEmployees).toBeDefined();
			expect(devMountainEmployees.length).not.toBe(0);
		})
		it('(when completed) should not have Cahlan in it', function () {
			var hasCahlan = false;
			for (var i = 0; i < devMountainEmployees.length; i++) {
				if (devMountainEmployees[i].name === 'Cahlan') {
					hasCahlan = true;
				}
			}
			expect(hasCahlan).toBe(false);
		})
		it('(when completed) should have a length of 3', function () {
			expect(devMountainEmployees.length).toBe(3);
		})
	})
	describe('users', function () {
		it('should exist and contain items', function () {
			expect(devMountainEmployees).toBeDefined();
			expect(devMountainEmployees.length).not.toBe(0);
		})
		it('(when complete) should not contain Tyler', function () {
			var hasTyler = false;
			for (var i = 0; i < users.length; i++) {
				if (users[i].name === 'Tyler McGinnis') {
					hasTyler = true;
				}
			}
			expect(hasTyler).toBe(false);
		})
	})
})