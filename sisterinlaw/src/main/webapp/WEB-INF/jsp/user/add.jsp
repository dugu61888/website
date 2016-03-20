<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>公司添加</title>
</head>
<body>
	<form id="addform"  method="post" action="company/add">
		<p>companyName: <input type="text" name="companyName" /></p>
  		<p>description: <input type="text" name="description" /></p>
	    <input type="submit" value="Submit" />
	</form>
</body>
</html>