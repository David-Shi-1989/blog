<template>
  <div class="mdE-wrap">
    <div class="mdE-container">
      <div class="mdE-toolbar">
        <ul class="btn-list">
          <li>
            <i class="sf sf-header" @click="onToolBtnClick('header')" @mouseover="onToolBtnHover('header')"></i>
            <ul class="mdE-sub-toolbar mdE-sub-toolbar-header" v-show="toolDropdown.header">
              <li @click="onHeaderToolBtnClick(1)"><p class="l1">标题1</p></li>
              <li @click="onHeaderToolBtnClick(2)"><p class="l2">标题2</p></li>
              <li @click="onHeaderToolBtnClick(3)"><p class="l3">标题3</p></li>
              <li @click="onHeaderToolBtnClick(4)"><p class="l4">标题4</p></li>
              <li @click="onHeaderToolBtnClick(5)"><p class="l5">标题5</p></li>
              <li @click="onHeaderToolBtnClick(6)"><p class="l6">标题6</p></li>
              <li @click="onHeaderToolBtnClick(0)"><p class="content">正文</p></li>
            </ul>
          </li>
          <li>
            <i class="sf sf-bold" @click="onToolBtnClick('bold')" @mouseover="onToolBtnHover('bold')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-italic" @click="onToolBtnClick('italic')" @mouseover="onToolBtnHover('italic')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li class="right-divider">
            <i class="sf sf-strikethrough" @click="onToolBtnClick('strikethrough')" @mouseover="onToolBtnHover('strikethrough')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-line-h" @click="onToolBtnClick('line-h')" @mouseover="onToolBtnHover('line-h')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li class="right-divider">
            <i class="sf sf-quote-left" @click="onToolBtnClick('quote')" @mouseover="onToolBtnHover('quote')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-list-ul" @click="onToolBtnClick('list-ul')" @mouseover="onToolBtnHover('list-ul')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-list-ol" @click="onToolBtnClick('list-ol')" @mouseover="onToolBtnHover('list-ol')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-indent" @click="onToolBtnClick('indent')" @mouseover="onToolBtnHover('indent')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li class="right-divider">
            <i class="sf sf-outdent" @click="onToolBtnClick('outdent')" @mouseover="onToolBtnHover('outdent')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-table" @click="onToolBtnClick('table')" @mouseover="onToolBtnHover('table')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-image" @click="onToolBtnClick('image')" @mouseover="onToolBtnHover('image')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li class="right-divider">
            <i class="sf sf-link" @click="onToolBtnClick('link')" @mouseover="onToolBtnHover('link')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-code" @click="onToolBtnClick('code')" @mouseover="onToolBtnHover('code')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
          <li>
            <i class="sf sf-code-block" @click="onToolBtnClick('code-block')" @mouseover="onToolBtnHover('code-block')" @mouseleave="onToolBtnHover('-1')"></i>
          </li>
        </ul>
        <!-- <ul class="tooltip">
          <li class="tooltip" style="left:-5px;" v-show="toolTip.header"><span>标题</span></li>
          <li class="tooltip" style="left:22px;" v-show="toolTip.bold"><span>加粗</span></li>
          <li class="tooltip" style="left:49px;" v-show="toolTip.italic"><span>斜体</span></li>
          <li class="tooltip" style="left:70px;" v-show="toolTip.strikethrough"><span>删除线</span></li>
          <li class="tooltip" style="left:107px;" v-show="toolTip['line-h']"><span>水平线</span></li>
          <li class="tooltip" style="left:140px;" v-show="toolTip.quote"><span>引用</span></li>
          <li class="tooltip" style="left:166px;" v-show="toolTip['list-ul']"><span>无序列表</span></li>
          <li class="tooltip" style="left:193px;" v-show="toolTip['list-ol']"><span>有序列表</span></li>
          <li class="tooltip" style="left:230px;" v-show="toolTip.indent"><span>缩进</span></li>
          <li class="tooltip" style="left:248px;" v-show="toolTip.outdent"><span>减少缩进</span></li>
          <li class="tooltip" style="left:295px;" v-show="toolTip.table"><span>表格</span></li>
          <li class="tooltip" style="left:322px;" v-show="toolTip.image"><span>图片</span></li>
          <li class="tooltip" style="left:350px;" v-show="toolTip.link"><span>链接</span></li>
          <li class="tooltip" style="left:387px;" v-show="toolTip.code"><span>代码</span></li>
          <li class="tooltip" style="left:407px;" v-show="toolTip['code-block']"><span>代码块</span></li>
        </ul> -->
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
      toolDropdown: {
        header: false
      },
      toolTip: {
        header: false,
        bold: false,
        italic: false,
        strikethrough: false,
        'line-h': false,
        quote: false,
        'list-ul': false,
        'list-ol': false,
        indent: false,
        outdent: false,
        table: false,
        image: false,
        link: false,
        code: false,
        'code-block': false
      }
    }
  },
  created () {
  },
  methods: {
    // toolbar
    closeAllToolDropdown () {
      var me = this
      Object.keys(this.toolDropdown).forEach(key => {
        me.toolDropdown[key] = false
      })
    },
    onToolBtnClick (val) {
      this.closeAllToolDropdown()
      if (this.toolDropdown[val] !== undefined) {
        this.toolDropdown[val] = true
      } else {
        console.log(`Tool btn (${val}) click`)
      }
    },
    onHeaderToolBtnClick (val) {
      this.closeAllToolDropdown()
      console.log(`Header${val} click`)
    },
    onToolBtnHover (val) {
      if (val && this.toolTip[val] !== undefined) {
        var me = this
        Object.keys(this.toolTip).forEach(key => {
          me.toolTip[key] = (key === val)
        })
      }
    }
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
