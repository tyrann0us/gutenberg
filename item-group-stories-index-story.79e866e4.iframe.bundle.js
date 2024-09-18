"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[3267],{"./packages/components/src/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_3:()=>CONNECTED_NAMESPACE,cT:()=>COMPONENT_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G8:()=>ContextSystemProvider,eb:()=>useComponentsContext});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&!0===globalThis.SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&!0===globalThis.SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/config-values.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/space.ts"),_colors_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/colors-values.js");const CONTROL_PROPS={controlSurfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlTextActiveColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent,controlPaddingX:12,controlPaddingXSmall:8,controlPaddingXLarge:12*1.3334,controlBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent}`,controlDestructiveBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.alert.red,controlHeight:"36px",controlHeightXSmall:"calc( 36px * 0.6 )",controlHeightSmall:"calc( 36px * 0.8 )",controlHeightLarge:"calc( 36px * 1.2 )",controlHeightXLarge:"calc( 36px * 1.4 )"},TOGGLE_GROUP_CONTROL_PROPS={toggleGroupControlBackgroundColor:CONTROL_PROPS.controlBackgroundColor,toggleGroupControlBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlBackdropBackgroundColor:CONTROL_PROPS.controlSurfaceColor,toggleGroupControlBackdropBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlButtonColorActive:CONTROL_PROPS.controlBackgroundColor},__WEBPACK_DEFAULT_EXPORT__=Object.assign({},CONTROL_PROPS,TOGGLE_GROUP_CONTROL_PROPS,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusXSmall:"1px",radiusSmall:"2px",radiusMedium:"4px",radiusLarge:"8px",radiusFull:"9999px",radiusRound:"50%",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardPaddingXSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(2)}`,cardPaddingSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)}`,cardPaddingMedium:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)}`,cardPaddingLarge:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(8)}`,elevationXSmall:"0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 3px rgba(0, 0, 0, 0.02), 0 4px 4px rgba(0, 0, 0, 0.01)",elevationSmall:"0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 3px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.03), 0 8px 8px rgba(0, 0, 0, 0.02)",elevationMedium:"0 2px 3px rgba(0, 0, 0, 0.05), 0 4px 5px rgba(0, 0, 0, 0.04), 0 12px 12px rgba(0, 0, 0, 0.03), 0 16px 16px rgba(0, 0, 0, 0.02)",elevationLarge:"0 5px 15px rgba(0, 0, 0, 0.08), 0 15px 27px rgba(0, 0, 0, 0.07), 0 30px 36px rgba(0, 0, 0, 0.04), 0 50px 43px rgba(0, 0, 0, 0.02)",surfaceBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"./packages/components/src/utils/font.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>font});const font_values={"default.fontFamily":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif","default.fontSize":"13px","helpText.fontSize":"12px",mobileTextMinFontSize:"16px"};function font(value){var _FONT$value;return null!==(_FONT$value=font_values[value])&&void 0!==_FONT$value?_FONT$value:""}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mountedRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mountedRef.current)return effect();mountedRef.current=!0}),deps),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{mountedRef.current=!1}),[])}},"./packages/components/src/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>hasConnectNamespace,Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&!0===globalThis.SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/item-group/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>ItemGroupContext,X:()=>useItemGroupContext});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ItemGroupContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({size:"medium"}),useItemGroupContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ItemGroupContext)},"./packages/components/src/item-group/item-group/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>ItemGroup,Z:()=>item_group_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),styles=__webpack_require__("./packages/components/src/item-group/styles.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var context=__webpack_require__("./packages/components/src/item-group/context.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedItemGroup(props,forwardedRef){const{isBordered,isSeparated,size:sizeProp,...otherProps}=function useItemGroup(props){const{className,isBordered=!1,isRounded=!0,isSeparated=!1,role="list",...otherProps}=(0,use_context_system.y)(props,"ItemGroup");return{isBordered,className:(0,use_cx.I)()(isBordered&&styles.Dq,isSeparated&&styles.s4,isRounded&&styles.eP,className),role,isSeparated,...otherProps}}(props),{size:contextSize}=(0,context.X)(),contextValue={spacedAround:!isBordered&&!isSeparated,size:sizeProp||contextSize};return(0,jsx_runtime.jsx)(context.K.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(component.Z,{...otherProps,ref:forwardedRef})})}UnconnectedItemGroup.displayName="UnconnectedItemGroup";const ItemGroup=(0,context_connect.Iq)(UnconnectedItemGroup,"ItemGroup"),item_group_component=ItemGroup;try{ItemGroup.displayName="ItemGroup",ItemGroup.__docgenInfo={description:"`ItemGroup` displays a list of `Item`s grouped and styled together.\n\n```jsx\nimport {\n  __experimentalItemGroup as ItemGroup,\n  __experimentalItem as Item,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ItemGroup>\n      <Item>Code</Item>\n      <Item>is</Item>\n      <Item>Poetry</Item>\n    </ItemGroup>\n  );\n}\n```",displayName:"ItemGroup",props:{isBordered:{defaultValue:{value:"false"},description:"Renders a border around the itemgroup.",name:"isBordered",required:!1,type:{name:"boolean"}},isRounded:{defaultValue:{value:"true"},description:"Renders with rounded corners.",name:"isRounded",required:!1,type:{name:"boolean"}},isSeparated:{defaultValue:{value:"false"},description:"Renders a separator between each item.",name:"isSeparated",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/item-group/item-group/component.tsx#ItemGroup"]={docgenInfo:ItemGroup.__docgenInfo,name:"ItemGroup",path:"packages/components/src/item-group/item-group/component.tsx#ItemGroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/item-group/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dq:()=>bordered,KA:()=>itemSizes,W6:()=>unstyledButton,by:()=>spacedAround,eP:()=>rounded,g_:()=>itemWrapper,s4:()=>separated,wc:()=>item});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/font.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/utils/config-values.js");const unstyledButton=as=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("font-size:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.L)("default.fontSize"),";font-family:inherit;appearance:none;border:1px solid transparent;cursor:pointer;background:none;text-align:start;text-decoration:","a"===as?"none":void 0,";svg,path{fill:currentColor;}&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.accent,";}&:focus{box-shadow:none;outline:none;}&:focus-visible{box-shadow:0 0 0 var( --wp-admin-border-width-focus ) ",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.accent,";outline:2px solid transparent;outline-offset:0;}",""),itemWrapper={name:"1bcj5ek",styles:"width:100%;display:block"},item={name:"150ruhm",styles:"box-sizing:border-box;width:100%;display:block;margin:0;color:inherit"},bordered=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.surfaceBorderColor,";",""),separated=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(">*:not( marquee )>*{border-bottom:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.surfaceBorderColor,";}>*:last-of-type>*:not( :focus ){border-bottom-color:transparent;}",""),borderRadius=_utils__WEBPACK_IMPORTED_MODULE_3__.Z.radiusSmall,spacedAround=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border-radius:",borderRadius,";",""),rounded=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("border-radius:",borderRadius,";>*:first-of-type>*{border-top-left-radius:",borderRadius,";border-top-right-radius:",borderRadius,";}>*:last-of-type>*{border-bottom-left-radius:",borderRadius,";border-bottom-right-radius:",borderRadius,";}",""),baseFontHeight=`calc(${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.fontSize} * ${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.fontLineHeightBase})`,paddingY=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeight} - ${baseFontHeight} - 2px) / 2)`,paddingYSmall=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeightSmall} - ${baseFontHeight} - 2px) / 2)`,paddingYLarge=`calc((${_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlHeightLarge} - ${baseFontHeight} - 2px) / 2)`,itemSizes={small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingYSmall," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingXSmall,"px;",""),medium:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingY," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingX,"px;",""),large:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)("padding:",paddingYLarge," ",_utils__WEBPACK_IMPORTED_MODULE_3__.Z.controlPaddingXLarge,"px;","")}},"./packages/components/src/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PolymorphicDiv=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e19lxcc00"})("");function UnforwardedView({as,...restProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PolymorphicDiv,{as,ref,...restProps})}UnforwardedView.displayName="UnforwardedView";const View=Object.assign((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedView),{selector:".components-view"}),__WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"component",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/view/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/memize/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function memize(fn,options){var head,tail,size=0;function memoized(){var args,i,node=head,len=arguments.length;searchCache:for(;node;){if(node.args.length===arguments.length){for(i=0;i<len;i++)if(node.args[i]!==arguments[i]){node=node.next;continue searchCache}return node!==head&&(node===tail&&(tail=node.prev),node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=head,node.prev=null,head.prev=node,head=node),node.val}node=node.next}for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];return node={args,val:fn.apply(null,args)},head?(head.prev=node,node.next=head):tail=node,size===options.maxSize?(tail=tail.prev).next=null:size++,head=node,node.val}return options=options||{},memoized.clear=function(){head=null,tail=null,size=0},memoized}__webpack_require__.d(__webpack_exports__,{Z:()=>memize})},"./packages/components/src/item-group/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomItemSize:()=>CustomItemSize,Default:()=>Default,NonClickableItems:()=>NonClickableItems,WithBorder:()=>WithBorder,default:()=>index_story});var component=__webpack_require__("./packages/components/src/item-group/item-group/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),styles=__webpack_require__("./packages/components/src/item-group/styles.ts"),context=__webpack_require__("./packages/components/src/item-group/context.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),view_component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedItem(props,forwardedRef){const{role,wrapperClassName,...otherProps}=function useItem(props){const{as:asProp,className,onClick,role="listitem",size:sizeProp,...otherProps}=(0,use_context_system.y)(props,"Item"),{spacedAround,size:contextSize}=(0,context.X)(),size=sizeProp||contextSize,as=asProp||(void 0!==onClick?"button":"div"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(("button"===as||"a"===as)&&styles.W6(as),styles.KA[size]||styles.KA.medium,styles.wc,spacedAround&&styles.by,className)),[as,className,cx,size,spacedAround]),wrapperClassName=cx(styles.g_);return{as,className:classes,onClick,wrapperClassName,role,...otherProps}}(props);return(0,jsx_runtime.jsx)("div",{role,className:wrapperClassName,children:(0,jsx_runtime.jsx)(view_component.Z,{...otherProps,ref:forwardedRef})})}UnconnectedItem.displayName="UnconnectedItem";const Item=(0,context_connect.Iq)(UnconnectedItem,"Item");try{Item.displayName="Item",Item.__docgenInfo={description:"`Item` is used in combination with `ItemGroup` to display a list of items\ngrouped and styled together.\n\n```jsx\nimport {\n  __experimentalItemGroup as ItemGroup,\n  __experimentalItem as Item,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <ItemGroup>\n      <Item>Code</Item>\n      <Item>is</Item>\n      <Item>Poetry</Item>\n    </ItemGroup>\n  );\n}\n```",displayName:"Item",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/item-group/item/component.tsx#Item"]={docgenInfo:Item.__docgenInfo,name:"Item",path:"packages/components/src/item-group/item/component.tsx#Item"})}catch(__react_docgen_typescript_loader_error){}const index_story={component:component.B,subcomponents:{Item},title:"Components (Experimental)/ItemGroup",argTypes:{as:{control:{type:null}},children:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/item-group",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},mapPropsToItem=(props,index)=>(0,react.createElement)(Item,{...props,key:index});mapPropsToItem.displayName="mapPropsToItem";const Template=props=>(0,jsx_runtime.jsx)(component.B,{...props});Template.displayName="Template";const Default=Template.bind({});Default.args={children:[{children:"First button item",onClick:()=>alert("First item clicked")},{children:"Second button item",onClick:()=>alert("Second item clicked")},{children:"Third button item",onClick:()=>alert("Third item clicked")},{children:"Anchor item",as:"a",href:"https://wordpress.org"}].map(mapPropsToItem)};const NonClickableItems=Template.bind({});NonClickableItems.args={children:[{children:"This <Item /> is not click-able because it doesn't have an `onClick` prop"},{children:"This <Item /> is also not click-able because it doesn't have an `onClick` prop"}].map(mapPropsToItem)};const CustomItemSize=Template.bind({});CustomItemSize.args={children:[{children:"This <Item /> will inherit the size from <ItemGroup /> (try changing the size prop)"},{children:'This <Item /> has a hardcoded size="large", regardless of <ItemGroup />\'s size',size:"large"}].map(mapPropsToItem)};const WithBorder=Template.bind({});WithBorder.args={...Default.args,isBordered:!0,isSeparated:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => <ItemGroup {...props} />",...Default.parameters?.docs?.source}}},NonClickableItems.parameters={...NonClickableItems.parameters,docs:{...NonClickableItems.parameters?.docs,source:{originalSource:"props => <ItemGroup {...props} />",...NonClickableItems.parameters?.docs?.source}}},CustomItemSize.parameters={...CustomItemSize.parameters,docs:{...CustomItemSize.parameters?.docs,source:{originalSource:"props => <ItemGroup {...props} />",...CustomItemSize.parameters?.docs?.source}}},WithBorder.parameters={...WithBorder.parameters,docs:{...WithBorder.parameters?.docs,source:{originalSource:"props => <ItemGroup {...props} />",...WithBorder.parameters?.docs?.source}}}}}]);