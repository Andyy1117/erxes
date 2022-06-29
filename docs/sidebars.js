module.exports = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          "Deploying on server": [
            "overview/deployment-overview",
            {
              "Installation Guide": [
                {
                  Ubuntu: [
                    "installation/ubuntu",
                    {
                      Installation: [
                        "installation/ubuntu-quickstart",
                        "installation/ubuntu-step-by-step",
                        "installation/ubuntu-troubleshooting",
                      ],
                    },
                  ],
                },
                "installation/docker",
                "installation/upgrade",
              ],
            },
          ],
        },
        {
          "Contributing on open source": [
            "getting-started/contributing-guide",
            "getting-started/submitting",
            "getting-started/commit",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Overview",
      items: ["overview/overview", "overview/architecture-overview"],
    },
    {
      type: "category",
      label: "Developer's Guide",
      items: [
        "developer/developer",
        "developer/plugin",
        "developer/events",
        "developer/documentation_guide",
        {
          "Administrator's Guide": [
            "administrator/creating-first-user",
            "administrator/environment-variables",
            "administrator/system-config",
            "administrator/migration",
          ],
        },
        {
          Tutorials: [
            "developer/graphql-api",
            "developer/android-sdk",
            "developer/ios-sdk",
            "developer/push-notifications",
            "developer/script-install",
          ],
        },
        {
          Integrations: [
            "developer/integrations-overview/facebook",
            "developer/integrations-overview/twitter",
            "developer/integrations-overview/gmail",
            "developer/integrations-overview/google-cloud-storage",
            "developer/integrations-overview/aws-s3",
            "developer/integrations-overview/aws-ses",
            "developer/integrations-overview/nylas-integrations",
            "developer/integrations-overview/whatsApp-integration",
            "developer/integrations-overview/sunshine-conversations",
          ],
        },
        "developer/troubleshooting",
        "developer/webhook",
        {
          type: 'link',
          label: 'GraphQL API references',
          href: "pathname:///developers/docs/references"
        }
      ],
    },
    {
      type: "category",
      label: "Changelog",
      items: [
        {
          type: "link",
          label: "Release Notes", // The link label
          href: "https://github.com/erxes/erxes/releases", // The external URL
        },
      ],
    },
  ],
  components: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["components/GettingStarted/introduction"],
    },
    {
      type: "category",
      label: "Components",
      collapsed: false,
      items: [
        "components/AnimatedLoader/animatedLoader",
        "components/Attachment/attachment",
        "components/AvatarUpload/avatarUpload",
        "components/BreadCrumb/breadcrumbs",
        "components/Button/button",
        "components/Chip/chip",
        "components/DatawithLoader/datawithloader",
        "components/EmptyContent/emptycontent",
        "components/EmptyState/emptystate",
        "components/ErrorMsg/errormsg",
        "components/FilePreview/filepreview",
        "components/FilterByParams/filterbyparams",
        "components/HelpPopOver/helppopover",
        "components/Icon/icon",
        "components/Info/info",
        "components/Label/label",
        "components/ModalTrigger/modaltrigger",
        "components/Namecard/namecard",
        "components/Pagination/pagination",
        "components/ProgressBar/progressbar",
        "components/SortableList/sortablelist",
        "components/SortHandler/sorthandler",
        "components/Spinner/spinner",
        "components/SubMenu/submenu",
        "components/Table/table",
        "components/Tab/tab",
        "components/Tag/tag",
        "components/TextDivider/textdivider",
        "components/TextInfo/textinfo",
        "components/Tip/tip",
        "components/Toggle/toggle",
        "components/Uploader/uploader",
      ],
    },
    {
      type: "category",
      label: "Utilities",
      collapsed: false,
      items: [
        "utilities/Alert/alert",
        "utilities/Box/box",
        "utilities/CollapseContent/collapsecontent",
        "utilities/CountsByTag/countsbytag",
        "utilities/FilterableList/filterablelist",
        "utilities/Form/form",
        "utilities/HeaderDescription/headerdescription",
        "utilities/ModifiableList/modifiablelist",
        {
          Step: ["utilities/Step/Step/step", "utilities/Step/Steps/steps"],
        },
        "utilities/Timer/timer",
        "utilities/Rule/rule",
      ],
    },
    {
      type: "category",
      label: "Icons",
      collapsed: false,
      items: [
        "icons/usage",
        "icons/icons",
      ],
    },
    {
      type: "category",
      label: "Styles",
      collapsed: false,
      items: [
        "styles/Color/color",
        "styles/Dimension/dimension",
        "styles/Typography/typography",
      ],
    },
  ],
};
