# Event Loop

JS是门非阻塞单线程语言，在执行的过程中会产生执行环境，这些执行环境会按顺序加入到执行栈中。  
如果遇到异步的代码，会被挂起并加入到Task队列中。一旦执行栈为空，Event Loop就会从Task队列中  
拿出需要执行的代码并放到执行栈中执行。  
## Micro-Task与Macro-Task
事件循环的中的异步队列有两种：macro（宏任务）队列和micro（微任务）队列。  
常见的macro-task比如:setTimeout、setInterval、setImmediate、script(整体代码)、I/O操作、UI渲染等。  
常见的micro-task比如：process.nextTick、Promise、MutationObserver等。  

## Event Loop 过程解析
一个完整的Event Loop过程，可以概括为以下阶段： 
1.全局上下文（script 标签）被推入调用栈，执行同步代码。(执行栈中的代码永远最先执行)  
2.执行栈为空，查询是否有微任务需要执行。  
3.执行所有微任务。  
4.执行渲染操作，更新界面  
5.然后开始下一轮 Event Loop，执行宏任务中的异步代码。  
（上述过程循环往复，直到两个队列都清空）  

通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。
