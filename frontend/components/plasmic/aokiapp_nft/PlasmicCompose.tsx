// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5wRa6g78qFSdinBG7vkSPb
// Component: xhSZaKBmKw

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Layout from "../../Layout"; // plasmic-import: NS5vZEpf5l/component
import Logo from "../../Logo"; // plasmic-import: YVgPvoXeFH/component
import { TabsContainer } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: qT-BBamUwNg/codeComponent
import { TabButton } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: 5jaBI7A4_ak/codeComponent
import Button from "../../Button"; // plasmic-import: lBHNzts6tFyj/component
import { TabUnderline } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: 7uvxnLIBlo3/codeComponent
import { TabContent } from "@plasmicpkgs/plasmic-tabs"; // plasmic-import: KyRr6GQ_tPI/codeComponent
import Button2 from "../../Button"; // plasmic-import: rshqwxzmtHH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_aokiapp_nft.module.css"; // plasmic-import: 5wRa6g78qFSdinBG7vkSPb/projectcss
import sty from "./PlasmicCompose.module.css"; // plasmic-import: xhSZaKBmKw/css

import ChecksvgIcon from "../plasmic_tabs/icons/PlasmicIcon__Checksvg"; // plasmic-import: zq2s7N0xWucT/icon
import IconIcon from "../plasmic_tabs/icons/PlasmicIcon__Icon"; // plasmic-import: 8K40faRNhuCj/icon

export type PlasmicCompose__VariantMembers = {};
export type PlasmicCompose__VariantsArgs = {};
type VariantPropType = keyof PlasmicCompose__VariantsArgs;
export const PlasmicCompose__VariantProps = new Array<VariantPropType>();

export type PlasmicCompose__ArgsType = {
  slider?: React.ReactNode;
  strength?: any;
  onStrengthChange?: (val: any) => void;
};
type ArgPropType = keyof PlasmicCompose__ArgsType;
export const PlasmicCompose__ArgProps = new Array<ArgPropType>(
  "slider",
  "strength",
  "onStrengthChange"
);

export type PlasmicCompose__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  logo?: p.Flex<typeof Logo>;
  columns?: p.Flex<"div">;
  faceimg?: p.Flex<typeof p.PlasmicImg>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  tabsContainer?: p.Flex<typeof TabsContainer>;
  tabUnderline?: p.Flex<typeof TabUnderline>;
  pad?: p.Flex<"div">;
  next?: p.Flex<typeof Button2>;
};

export interface DefaultComposeProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompose__RenderFunc(props: {
  variants: PlasmicCompose__VariantsArgs;
  args: PlasmicCompose__ArgsType;
  overrides: PlasmicCompose__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "strength",
        type: "writable",
        variableType: "array",

        valueProp: "strength",
        onChangeProp: "onStrengthChange"
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Layout
            data-plasmic-name={"layout"}
            data-plasmic-override={overrides.layout}
            className={classNames("__wab_instance", sty.layout)}
          >
            <Logo
              data-plasmic-name={"logo"}
              data-plasmic-override={overrides.logo}
              className={classNames("__wab_instance", sty.logo)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oolSw
              )}
            >
              {"Composite the vectors, and see how images are created."}
            </div>
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__c2Mrc)}>
                <p.PlasmicImg
                  data-plasmic-name={"faceimg"}
                  data-plasmic-override={overrides.faceimg}
                  alt={""}
                  className={classNames(sty.faceimg)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/aokiapp_nft/images/image.jpg",
                    fullWidth: 256,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lnb3R
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{"No image? \nPlease use "}</React.Fragment>
                    {
                      <p.PlasmicLink
                        data-plasmic-name={"link"}
                        data-plasmic-override={overrides.link}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link
                        )}
                        component={Link}
                        href={
                          "https://aokiapp-nft-internal-demo-z1aioy.streamlit.app/" as const
                        }
                        platform={"nextjs"}
                      >
                        {"alternative implementation"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column__etJpp)}>
                <TabsContainer
                  data-plasmic-name={"tabsContainer"}
                  data-plasmic-override={overrides.tabsContainer}
                  className={classNames("__wab_instance", sty.tabsContainer)}
                  initialKey={"tab1" as const}
                  previewAll={true}
                >
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dh0PL
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__dpKDj
                          )}
                        >
                          <TabButton
                            className={classNames(
                              "__wab_instance",
                              sty.tabButton__fMwk9
                            )}
                            tabKey={"tab1" as const}
                          >
                            <Button color={"clear" as const}>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__qa4E
                                )}
                              >
                                {"Easy"}
                              </div>
                            </Button>
                          </TabButton>
                          <TabButton
                            className={classNames(
                              "__wab_instance",
                              sty.tabButton__cLkNe
                            )}
                            tabKey={"tab2" as const}
                          >
                            <Button color={"clear" as const}>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___5MbPb
                                )}
                              >
                                {"Advanced"}
                              </div>
                            </Button>
                          </TabButton>
                          <TabUnderline
                            data-plasmic-name={"tabUnderline"}
                            data-plasmic-override={overrides.tabUnderline}
                            className={classNames(
                              "__wab_instance",
                              sty.tabUnderline
                            )}
                          />
                        </div>
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__rSz3Y
                            )}
                          >
                            {true ? (
                              <TabContent
                                className={classNames(
                                  "__wab_instance",
                                  sty.tabContent__vAp3V
                                )}
                                tabKey={"tab1" as const}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__neTPa
                                  )}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__oNJw
                                    )}
                                  >
                                    {"Touch the pad below"}
                                  </div>
                                  <div
                                    data-plasmic-name={"pad"}
                                    data-plasmic-override={overrides.pad}
                                    className={classNames(
                                      projectcss.all,
                                      sty.pad
                                    )}
                                  />
                                </div>
                              </TabContent>
                            ) : null}
                            <TabContent
                              className={classNames(
                                "__wab_instance",
                                sty.tabContent___2BsXc
                              )}
                              tabKey={"tab2" as const}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__rnalL
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__zGdRt
                                  )}
                                >
                                  {
                                    "Change the sliders, Observe the changes in image!"
                                  }
                                </div>
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__nXcVk
                                  )}
                                >
                                  {p.renderPlasmicSlot({
                                    defaultContents: null,
                                    value: args.slider
                                  })}
                                </div>
                              </div>
                            </TabContent>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </ph.DataCtxReader>
                </TabsContainer>
              </div>
            </div>
            <Button2
              data-plasmic-name={"next"}
              data-plasmic-override={overrides.next}
              className={classNames("__wab_instance", sty.next)}
              color={"blue" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rwLe9)}
                  role={"img"}
                />
              }
              onClick={async event => {
                const $steps = {};
                $steps["goToCompose"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "navigation",
                            interactionUuid: "W_PUYwrrt",
                            componentUuid: "xhSZaKBmKw",
                            argName: "destination"
                          },
                          () =>
                            (() => {
                              try {
                                return (
                                  "/cashier?t=" +
                                  encodeURIComponent(
                                    JSON.stringify($state.strength)
                                  )
                                );
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return `/compose`;
                                }
                                throw e;
                              }
                            })()
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "W_PUYwrrt",
                          componentUuid: "xhSZaKBmKw"
                        },
                        () =>
                          (({ destination }) => {
                            __nextRouter?.push(destination);
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["goToCompose"] === "object" &&
                  typeof $steps["goToCompose"].then === "function"
                ) {
                  $steps["goToCompose"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "navigation",
                      interactionUuid: "W_PUYwrrt",
                      componentUuid: "xhSZaKBmKw"
                    },
                    $steps["goToCompose"]
                  );
                }
              }}
              showEndIcon={true}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rynbI)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4Jk7K
                )}
              >
                {"I decided it. Purchase this image."}
              </div>
            </Button2>
          </Layout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layout",
    "logo",
    "columns",
    "faceimg",
    "link",
    "tabsContainer",
    "tabUnderline",
    "pad",
    "next"
  ],
  layout: [
    "layout",
    "logo",
    "columns",
    "faceimg",
    "link",
    "tabsContainer",
    "tabUnderline",
    "pad",
    "next"
  ],
  logo: ["logo"],
  columns: [
    "columns",
    "faceimg",
    "link",
    "tabsContainer",
    "tabUnderline",
    "pad"
  ],
  faceimg: ["faceimg"],
  link: ["link"],
  tabsContainer: ["tabsContainer", "tabUnderline", "pad"],
  tabUnderline: ["tabUnderline"],
  pad: ["pad"],
  next: ["next"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  logo: typeof Logo;
  columns: "div";
  faceimg: typeof p.PlasmicImg;
  link: "a";
  tabsContainer: typeof TabsContainer;
  tabUnderline: typeof TabUnderline;
  pad: "div";
  next: typeof Button2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompose__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompose__VariantsArgs;
    args?: PlasmicCompose__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompose__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompose__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCompose__ArgProps,
          internalVariantPropNames: PlasmicCompose__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompose__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompose";
  } else {
    func.displayName = `PlasmicCompose.${nodeName}`;
  }
  return func;
}

export const PlasmicCompose = Object.assign(
  // Top-level PlasmicCompose renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    logo: makeNodeComponent("logo"),
    columns: makeNodeComponent("columns"),
    faceimg: makeNodeComponent("faceimg"),
    link: makeNodeComponent("link"),
    tabsContainer: makeNodeComponent("tabsContainer"),
    tabUnderline: makeNodeComponent("tabUnderline"),
    pad: makeNodeComponent("pad"),
    next: makeNodeComponent("next"),

    // Metadata about props expected for PlasmicCompose
    internalVariantProps: PlasmicCompose__VariantProps,
    internalArgProps: PlasmicCompose__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCompose;
/* prettier-ignore-end */
