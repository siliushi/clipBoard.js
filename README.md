# clipBoard.js
with javascript operating clipboard, copy、cut and paste.


# support
|               | copy   |  cut    |  paste   |
| :-----------: |:------:| :------:| :------: |   
| chrome        | √      | √       | ×        |
| Firefox       | √      | √       | ×        |
| IE7+          | √      | √       | √        |


# methods
###  copy
```
var copy = new clipBoard(document.getElementById('data'), {
	beforeCopy: function() {
		
	},
	copy: function() {
		return document.getElementById('data').value;
	},
	afterCopy: function() {

	}
});
```
copy will be called automatic, if you want call by yourself, you can do like this 
```
var copy = new clipBoard(document.getElementById('data'));
copy.copyd();
```
> document.getElementById('data') is the value target, you can also use it with jquery  $('#data')


### cut
it same to copy
```
var cut = new clipBoard(document.getElementById('data'), {
	beforeCut: function() {
		
	},
	Cut: function() {
		return document.getElementById('data').value;
	},
	afterCut: function() {

	}
});
```
or
```
var cut = new clipBoard(document.getElementById('data'));
cut.cut();
```

### paste
```
var cut = new clipBoard(document.getElementById('data'), {
	beforeCut: function() {
		
	},
	Cut: function() {
		return document.getElementById('data').value;
	},
	afterCut: function() {

	}
});
```
or
```
var cut = new clipBoard(document.getElementById('data'));
cut.cut();
```
> document.getElementById('data') is the paste target, you can also use it with jquery  $('#data')
