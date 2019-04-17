// 规则：[大小写字母数字_-.]@[大小写字母数字_-.].[2-8位的大小写字母]
export const email_regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;

//6-16位字母或数字或特殊字符_-.
export const password_regexp = /^([A-Za-z0-9_\-\.]{6,16})$/;
