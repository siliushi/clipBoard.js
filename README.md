# clipBoard.js
with javascript operating clipboard, copy、cut and paste.

# example
<input type="text" id="data" value="剪切板">
<button id="copy">复制</button>
<button id="cut">剪切</button>
<!--[if IE]>
    <button id="paste">粘贴</button>
<![endif]-->
<script src="../clipBoard.min.js"></script>
<script>
/**
 * 复制、剪切：chrome、Firefox、ie
 * 粘贴：ie
 * @date   2016-04-25
 * @return {[type]}   [description]
 */
document.getElementById('copy').onclick = function() {
	var test = new clipBoard(document.getElementById('data'), {
		beforeCopy: function() {
		},
		copy: function() {
			return document.getElementById('data').value;
		},
		afterCopy: function() {
		}
	});
};
document.getElementById('cut').onclick = function() {
	var test = new clipBoard(document.getElementById('data'), {});
	test.cut();
};
document.getElementById('paste').onclick = function() {
	var a = new clipBoard(document.getElementById('data'), {});
	a.paste();
};
</script>

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
