<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="UTF-8">
	<title>自助查询平台</title>
	<link rel="stylesheet" type="text/css" href="./easyui/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="./easyui/themes/icon.css">
	<script type="text/javascript" src="./easyui/js/jquery.min.js"></script>
	<script type="text/javascript" src="./easyui/js/jquery.easyui.min.js"></script>
</head>
<body style="margin:1px;">
	<div class="easyui-panel" style="padding-left:6px;width:100%;height:62px;line-height:100%;background:#ebf0f5 url(./easyui/img/pageHeader_bg.png) repeat-x;" data-options="footer:'#ft'">
		<form id="${navtab }search" method="post">
		<table style="width:100%">
			<tr>
				<td style="width:70px;text-align:right">用户姓名:</td>
				<td style="width:170px;"><input class="easyui-textbox" type="text" name="userName"></input></td>
				<td style="width:70px;text-align:right">登录名称:</td>
				<td style="width:170px;"><input class="easyui-textbox" type="text" name="loginName"></input></td>
				<td style="width:70px;text-align:right">审核状态:</td>
				<td style="width:170px;">
					<select class="easyui-combobox" name="status" style="width:150px;">
    					<option value="">请选择状态</option>
    					<option value="0">未审核</option>
    					<option value="1">已审核</option>
					</select>
				</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="7" style="text-align:right;padding-right:10px;">
					<a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="width:80px" onclick="$('#${navtab }table').datagrid('reload')">Search</a>
				</td>
			</tr>
		</table>
		</form>
    </div>
    <div class="easyui-panel" style="width:100%;height:2px;" data-options="footer:'#ft'"></div>
    <table id="${navtab }table" class="easyui-datagrid" style="width:100%;height:524px"
		data-options="rownumbers:true,singleSelect:true,pagination:true,url:'${action }/list',method:'post',toolbar:toolbar,
		pageSize:20,pageList:[20,30,50],onBeforeLoad:function (param){
			$.each($('#${navtab }search input[type=\'hidden\']'), function( index, value ) {
				var k = $(value).attr('name');var v=$(value).val();
				param[k] = v;
			});
	}">
		<thead>
			<tr>
				<th data-options="field:'uid',checkbox:true"></th>
				<th data-options="field:'userId',width:80">用户ID</th>
				<th data-options="field:'userName',width:80">用户名称</th>
				<th data-options="field:'loginName',width:80">登陆名称</th>
				<th data-options="field:'orgName',width:120">所在部门</th>
				<th data-options="field:'mobile',width:100">手机号码</th>
				<th data-options="field:'email',width:160">邮箱地址</th>
				<th data-options="field:'cityName',width:80">所在城市</th>
				<th data-options="field:'areaName',width:100">所属区域</th>
				<th data-options="field:'status',width:80">审核状态</th>
				<th data-options="field:'rlist',width:120">所属角色</th>
			</tr>
		</thead>
	</table>
	<div id="${navtab }dlg" class="easyui-dialog" title="编辑用户信息" style="width:50%;height:370px;max-width:700px;padding:10px;" 
		data-options="iconCls:'icon-save',closed:true,buttons: [{text:'提交',iconCls:'icon-ok',handler:function(){
		$('#${navtab }form').form('submit',{
    		onSubmit: function(){},
    		success:function(data){
    			data = jQuery.parseJSON(data);
    			if(data.statusCode=='200'){
    				$('#${navtab }table').datagrid('reload');
    				$('#${navtab }dlg').dialog('close');
    				$.messager.alert('提醒信息',data.message,'info');
    			}else{
    				$.messager.alert('提醒信息',data.message,'error');
    			}
    		}
		});
	}}]">
</div>
	<script type="text/javascript">
		var toolbar = [{
			text:'审核',
			iconCls:'icon-edit',
			handler:function(){
				var sectorId = $("input[name='uid']:checked").val();
				if(sectorId==null){
					$.messager.alert('提醒信息','请选择您要审核的用户！','error');
					return false;
				}
				$('#${navtab}dlg').dialog({
					closed: false,
				    cache: false,
				    href: '${action}/edit/'+sectorId,
				    modal: true
				});;
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