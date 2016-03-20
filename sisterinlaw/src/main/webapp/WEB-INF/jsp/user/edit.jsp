<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>自助查询平台</title>
</head>
<body>
	<sf:form id="${navtab }form" modelAttribute="user" method="post" action="${action }/edit/${user.userId }">
		<sf:hidden path="userId"/>
		<table cellpadding="5">
			<tr>
	    		<td>用户姓名:</td>
	    		<td><sf:input path="userName" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
	    	<tr>
	    		<td>登陆名称:</td>
	    		<td><sf:input path="loginName" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
			<tr>
	    		<td>所在部门:</td>
	    		<td><sf:input path="orgName" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
	    	<tr>
	    		<td>手机号码:</td>
	    		<td><sf:input path="mobile" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
	    	<tr>
	    		<td>邮箱地址:</td>
	    		<td><sf:input path="email" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
	    	<tr>
	    		<td>所在城市:</td>
	    		<td><sf:input path="cityName" class="easyui-textbox" data-options="readonly:true" style="width:300px;"/></td>
	    	</tr>
	    	<tr>
	    		<td>所属大区:</td>
	    		<td>
	    			<select class="easyui-combobox" name="areaName" style="width:200px;">
						<option value="0-全国" <c:if test="${user.areaId==0}">selected</c:if>>全国</option>
						<c:forEach items="${areaList}" var="item">
							<option value="${item.key}-${item.value}" <c:if test="${user.areaId==item.key}">selected</c:if>>${item.value}</option>
						</c:forEach>
					</select>
				</td>
	    	</tr>
	    	<tr>
	    		<td>审核状态:</td>
	    		<td>
	    			<select class="easyui-combobox" name="status" style="width:200px;">
    					<option value="0" <c:if test="${user.status==0}">selected</c:if>>未审核</option>
    					<option value="1" <c:if test="${user.status==1}">selected</c:if>>已审核</option>
					</select>
	    		</td>
	    	</tr>
	    </table>
	</sf:form>
</body>
</html>