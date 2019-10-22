<template>
  <div class="mdE-wrap">
    <div class="mdE-container">
      <div class="mdE-toolbar">
        <ul>
          <li title="标题">
            <i class="sf sf-header"></i>
            <ul class="mdE-sub-toolbar mdE-sub-toolbar-header">
              <li><p class="l1">标题1</p></li>
              <li><p class="l2">标题2</p></li>
              <li><p class="l3">标题3</p></li>
              <li><p class="l4">标题4</p></li>
              <li><p class="l5">标题5</p></li>
              <li><p class="l6">标题6</p></li>
              <li><p class="content">正文</p></li>
            </ul>
          </li>
          <li title="加粗"><i class="sf sf-bold"></i></li>
          <li title="斜体"><i class="sf sf-italic"></i></li>
          <li title="删除线" class="right-divider"><i class="sf sf-strikethrough"></i></li>
          <li title="水平线"><i class="sf sf-line-h"></i></li>
          <li title="引用" class="right-divider"><i class="sf sf-quote-left"></i></li>
          <li title="无序列表"><i class="sf sf-list-ul"></i></li>
          <li title="有序列表"><i class="sf sf-list-ol"></i></li>
          <li title="缩进"><i class="sf sf-indent"></i></li>
          <li title="减少缩进" class="right-divider"><i class="sf sf-outdent"></i></li>
          <li title="表格"><i class="sf sf-table"></i></li>
          <li title="图片"><i class="sf sf-image"></i></li>
          <li title="链接" class="right-divider"><i class="sf sf-link"></i></li>
          <li title="代码"><i class="sf sf-code"></i></li>
          <li title="代码块"><i class="sf sf-code-block"></i></li>
        </ul>
      </div>
      <div class="mdE-editor">
      </div>
      <div class="mdE-preview"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import url('./toolbar.less');
.mdE-wrap {
  width: 1000px;
  height: 500px;
  @toobar-height: 31px;
  .mdE-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: @toobar-height auto;
    grid-template-columns: 50% 50%;
    border-radius: 4px;
    border: 1px solid #ddd;
    grid-template-areas:
      "tool tool"
      "editor preview";
    .mdE-toolbar {
      grid-area: tool;
      .toobar-style(@toobar-height);
    }
    .mdE-editor {
      grid-area: editor;
    }
    .mdE-preview {
      grid-area: preview;
    }
  }
}

</style>
