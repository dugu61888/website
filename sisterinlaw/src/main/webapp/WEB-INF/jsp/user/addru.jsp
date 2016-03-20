<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8">
	<title>自助查询平台</title>
	<link rel="stylesheet" type="text/css" href="../../easyui/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="../../easyui/themes/icon.css">
	<script type="text/javascript" src="../../easyui/js/jquery.min.js"></script>
	<script type="text/javascript" src="../../easyui/js/jquery.easyui.min.js"></script>
</head>
<body style="margin:1px;">
	<div class="easyui-panel" style="padding-left:6px;width:100%;height:62px;line-height:100%;background:#ebf0f5 url(../../easyui/img/pageHeader_bg.png) repeat-x;" data-options="footer:'#ft'">
		<form id="${navtab }search" method="post">
		<table style="width:100%">
			<tr>
				<td style="width:70px;text-align:right">角色名称:</td>
				<td style="width:170px;"><input class="easyui-textbox" type="text" name="roleName"></input></td>
				<td></td>
			</tr>
			<tr>
				<td colspan="3" style="text-align:right;padding-right:10px;">
					<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px" onclick="$('#${navtab }table').datagrid('reload')">Search</a>
				</td>
			</tr>
		</table>
		</form>
    </div>
    <div class="easyui-panel" style="width:100%;height:2px;" data-options="footer:'#ft'"></div>
    <table id="${navtab }table" class="easyui-datagrid" style="width:100%;height:524px" singleselect="false"
		data-options="rownumbers:true,singleSelect:true,pagination:true,url:'../../${action }/rlistnotuser/${userId }',method:'post',toolbar:toolbar,
		pageSize:20,pageList:[20,30,50],onBeforeLoad:function (param){
			$.each($('#${navtab }search input[type=\'hidden\']'), function( index, value ) {
				var k = $(value).attr('name');var v=$(value).val();
				param[k] = v;
			});
	}">
		<thead>
			<tr>
				<th data-options="field:'indexId[]',checkbox:true"></th>
				<th data-options="field:'roleId',width:80">角色ID</th>
				<th data-options="field:'roleName',width:160">角色名称</th>
				<th data-options="field:'status',width:80">启用状态</th>
				<th data-options="field:'memo',width:300">备注信息</th>
			</tr>
		</thead>
	</table>
	<script type="text/javascript">
		var toolbar = [{
			text:'保存',
			iconCls:'icon-save',
			handler:function(){;
				var indexs = $("input[name='indexId\[\]']:checked");
				var roleIds = new Array();
				$.each( indexs, function(i, n){
					roleIds[i] = $(n).val();
				});
				if(roleIds.length<1){
					$.messager.alert('提醒信息','请选择为用户添加的角色!','error');
					return false;
				}
				$.post('../../${action}/addRU/${userId}',{ 'roleId[]': roleIds },function(data){
					$.messager.alert('提醒信息',data.message,'info');
					window.location = "../../${action}/urhtml/${userId}";
				},"json");
			}
		},'-',{
			text:'返回',
			iconCls:'icon-back',
			handler:function(){
				window.location = "../../${action}/urhtml/${userId}";
			}
		}];
		$(function(){
			var pager = $('#${navtab }table').datagrid('getPager');	// get the pager of datagrid
			pager.pagination({
		        beforePageText: '第',//页数文本框前显示的汉字 
		        afterPageText: '页    共 {pages} 页', 
		        displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
			});			
		});
	</script>
</body>
</html>