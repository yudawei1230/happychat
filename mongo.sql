mongo 写入，更新，删除，查询
1.db.dropDatabase()
2.db.XXXX.insert({x:1}) 插入XXXX表数据
3.db.XXXX.find({x:1}).skin(3).limit(2).sort({x:1}) 跳过前3返回两条,排序
4.for(i=1;i<100;i++)db.XXXX.insert({x:1}) 循环插入
5.db.XXX.find().count()
6.db.XXX.update({x:1},{x:999}) 两个参数，前为查询条件，后为更新,且覆盖所有数据
7.db.XXX.update({x:1},{$set:{y:99}}) sert操作符(部分更新操作服),只覆盖一条数据
8.db.xxx.update({x:1},{y:999},true) 第三参数upsert，查询不到即插入
9.db.XXX.update({X:1},{$set:{x:2}},false,true) 第四参数更新多条数据，且只覆盖一条
10.db.XXX.remove({x:1}) 输出所有x为1数据
11.db.XXX.drop()  删除xxx表及其所有数据

mongo  索引
1.db.xxx.getIndexes() 查询所有索引情况
2.db.XXX.ensureIndex({x:1}) db.XXX.dropIndex("XX") 1为正向排序  -1为逆向排序
3.db.XXX.ensureIndex({"$**":"text")}  全文索引//{unique:true} 唯一索引 {sparse:true/false}稀疏索引
4.db.XXX.find({$text:{$search:"AA -cc"}})  全文索引查询AA 切不包含cc
5.db.XXX.find({$text:{$search:"\"aa\" \"bb\"}})  全文索引即包含aa也包含bb
6.db.XXX.find({$text:{search:"aa nn"}},{$score:{$meta:"textScore"}}).sort({$score:{$meta:"textScore"}})   全文索引相似度 与sort一起使用，可以达到很好的使用效果 每次查询，只能制定一个$text查询 && $text查询不能出现在$nor查询中
7.db.XXX.find({X:{$exists:true}}).hint("S") 查询存在X字段的数据,强制使用S索引
