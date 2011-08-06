describe('javascript.util.ArrayList', function() {
  var arrayList;
  var iterator;
  var first;
  var second;
  
  it('can be constructed', function() {
    arrayList = new javascript.util.ArrayList();
    expect(arrayList).toBeDefined();
  });
  
  it('one element can be appended', function() {
    first = 1;
  
    arrayList.add(first);
    
    expect(arrayList.size()).toEqual(1);
  });
  
  it('another element can be appended', function() {
    second = {};

    arrayList.add(second);
    
    expect(arrayList.size()).toEqual(2);
  });
  
  it('can be iterated', function() {
    iterator = arrayList.iterator();
       
    expect(iterator.next()).toBe(first);
  });
  
  it('iterator should report more elements available', function() {
    expect(iterator.hasNext()).toBeTruthy();
  });
  
  it('can be iterated again', function() {
    expect(iterator.next()).toBe(second);
  });
  
  it('iterator should report no more elements available', function() {
    expect(iterator.hasNext()).toBeFalsy();
  });
  
  it('throws when iterating beyond end', function() {
    try {
      iterator.next();
    }
    catch (e) {
      expect(e instanceof javascript.util.NoSuchElementException).toBeTruthy();
    }
  });
});
