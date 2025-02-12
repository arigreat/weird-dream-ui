"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const inputType = [
  "text",
  // 普通文本输入框
  "password"
  // 密码输入框
  // 'email',         // 邮箱输入框，自动验证邮箱格式
  // 'tel',           // 电话号码输入框
  // 'url',           // URL 输入框，自动验证 URL 格式
  // 'number',        // 数字输入框，可以设置最小值、最大值和步长
  // 'range',         // 范围选择器，通常呈现为滑动条
  // 'date',          // 日期选择器
  // 'month',         // 月份选择器
  // 'week',          // 周选择器
  // 'time',          // 时间选择器
  // 'datetime-local',// 本地日期时间选择器
  // 'search',        // 搜索框
  // 'color',         // 颜色选择器
  // 'file',          // 文件选择器
  // 'checkbox',      // 多选框
  // 'radio',         // 单选框
  // 'submit',        // 提交按钮
  // 'reset',         // 重置按钮
  // 'button',        // 普通按钮
  // 'hidden',        // 隐藏字段
  // 'image',         // 图像按钮
  // 'datetime'       // 传统的日期和时间选择器 (HTML5 不推荐使用)
];
const inputProps = {
  type: {
    type: String,
    validator(value) {
      return inputType.includes(value);
    },
    default: "text"
  },
  required: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String
  }
};
exports.inputProps = inputProps;
exports.inputType = inputType;
