var dict = ee.Dictionary(
    {
      "name":"Aimon",
  
    "hobby":"reading",
  
    "numList":[2,3,4,5,6,7,9]
    })
    print(dict.get("numList"))
  var list =ee.List([2,3,4,5,6,7,9])
  print("Main list" ,list)
  print(list.reduce(ee.Reducer.sum()))
   
   