<template>
  <div class="sww-aa-wrap">
    <Form :label-width="0" :model="form">
      <FormItem label="" prop="title">
        <Input v-model="form.title" prefix="ios-book" placeholder="请输入标题" />
      </FormItem>
    </Form>
    <div class="tag-wrap">
      <Tag closable name="JavaScript">JavaScript</Tag>
      <Poptip placement="bottom" width="400" transfer="true">
        <Button icon="ios-add" type="dashed" size="small">添加标签</Button>
        <div slot="content">
          <div>
            <Input placeholder="创建标签" clearable style="width:200px;" size="small"/>
            <Button type="primary" size="small">创建标签</Button>
          </div>
          <div style="margin-top:10px;">
            <Tag name="JavaScript" checkable :checked="true" color="primary">JavaScript</Tag>
            <Tag name="Ts" checkable :checked="false" color="primary">Ts</Tag>
            <Tag name="css" checkable :checked="false" color="primary">class</Tag>
            <Tag name="h5" checkable :checked="false" color="primary">h5</Tag>
          </div>
        </div>
      </Poptip>
    </div>
    <div class="editor-wrap">
      <mavon-editor style="height:450px;" v-model="value"></mavon-editor>
    </div>
    <div class="btn-wrap">
      <Button type="default" @click="onSaveClick">保存</Button>
      <Button type="primary">发布</Button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      value: '',
      form: {
        title: ''
      }
    }
  },
  methods: {
    onSaveClick () {
      console.log(this.value)
    }
  }
}
</script>

<style lang="less" scoped>
.sww-aa-wrap {
  padding: 20px 0 5px 0;
  .tag-wrap {
    margin-bottom: 10px;
  }
  .editor-wrap {
  }
  .btn-wrap {
    margin-top: 20px;
    text-align: right;
    & > button {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
}
</style>
