---
id: vue3-ts
title: Vue 3 + Typescript
---

## 1. Why Vue & TypeScript

### TypeScript

- builds on JavaScript
- using **static type definitions**
  - 동적 타입에 대한 사이드 이펙트를 줄일 수 있음
- Vue3 부터 원활히 적용 가능
- 부분적으로 적용 가능

## 2. Setting Up Vue 3 & TypeScript

- install `npm install -g @vue/cli`
- `vue create vue-3-and-typescript`
- select `Manually select features`
- activate below options
  - Choose Vue version
  - Babel
  - TypeScript
  - Linter / Formatter
- select `3.x (preview)`
- Use class-stype compoennt syntax? `No`
- Use Babel alongside TypeScript? `Yes`
- `ESLint + Prettier`
- `Lint on save`
- `In dedicated config files`
- and choose the last option you preferred

### 기존 프로젝트에 추가하고 싶다면

- vue 프로젝트 내에서
  - `vue add typescript`

## 3. Creating Components with TypeScript

- `<script lang="ts">` 가 새롭게 등장 되어 있을 거임
- `import { defineComponent } from 'vue'`
  - Component 만들어주는 helper function
  - export default로 컴포넌트 만들때 아래와 같이 만들 수 있음

```ts
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultComponent',
  ...
})
</script>
```
