describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('should sort a list correctly', function() {
  let list = [3, 6, 2, 7, 70, 13]
  expect(bubbleSort(list)).toEqual([2, 3, 6, 7, 13, 70])
  });

});

