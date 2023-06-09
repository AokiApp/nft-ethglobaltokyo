// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5wRa6g78qFSdinBG7vkSPb
// Component: -9PLIVK0tg

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
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import Button from "../../Button"; // plasmic-import: rshqwxzmtHH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_aokiapp_nft.module.css"; // plasmic-import: 5wRa6g78qFSdinBG7vkSPb/projectcss
import sty from "./PlasmicCashier.module.css"; // plasmic-import: -9PLIVK0tg/css

export type PlasmicCashier__VariantMembers = {};
export type PlasmicCashier__VariantsArgs = {};
type VariantPropType = keyof PlasmicCashier__VariantsArgs;
export const PlasmicCashier__VariantProps = new Array<VariantPropType>();

export type PlasmicCashier__ArgsType = {};
type ArgPropType = keyof PlasmicCashier__ArgsType;
export const PlasmicCashier__ArgProps = new Array<ArgPropType>();

export type PlasmicCashier__OverridesType = {
  root?: p.Flex<"div">;
  layout?: p.Flex<typeof Layout>;
  logo?: p.Flex<typeof Logo>;
  tokens?: p.Flex<typeof RichTable>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultCashierProps {}

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

function PlasmicCashier__RenderFunc(props: {
  variants: PlasmicCashier__VariantsArgs;
  args: PlasmicCashier__ArgsType;
  overrides: PlasmicCashier__OverridesType;
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
                sty.text__hlFlu
              )}
            >
              {"Vectors you decided are in cart."}
            </div>
            <RichTable
              data-plasmic-name={"tokens"}
              data-plasmic-override={overrides.tokens}
              className={classNames("__wab_instance", sty.tokens)}
              data={(() => {
                try {
                  return (() => {
                    const c = JSON.parse($ctx.query.t || "[]");

                    return c.map((e, i) => ({
                      "Token Name": "Token " + i,
                      Amount: e,
                      Total: e
                    }));
                  })();
                } catch (e) {
                  if (e instanceof TypeError) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
              defaultSize={"middle" as const}
            />

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mlwvj)}
                  role={"img"}
                />
              }
              showEndIcon={true}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rmTa9)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uwSis
                )}
              >
                {"Confirm on wallet"}
              </div>
            </Button>
          </Layout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layout", "logo", "tokens", "button"],
  layout: ["layout", "logo", "tokens", "button"],
  logo: ["logo"],
  tokens: ["tokens"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
  logo: typeof Logo;
  tokens: typeof RichTable;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCashier__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCashier__VariantsArgs;
    args?: PlasmicCashier__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCashier__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCashier__ArgsType,
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
          internalArgPropNames: PlasmicCashier__ArgProps,
          internalVariantPropNames: PlasmicCashier__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCashier__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCashier";
  } else {
    func.displayName = `PlasmicCashier.${nodeName}`;
  }
  return func;
}

export const PlasmicCashier = Object.assign(
  // Top-level PlasmicCashier renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),
    logo: makeNodeComponent("logo"),
    tokens: makeNodeComponent("tokens"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicCashier
    internalVariantProps: PlasmicCashier__VariantProps,
    internalArgProps: PlasmicCashier__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCashier;
/* prettier-ignore-end */
