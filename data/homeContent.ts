import { projectsData } from "@/data/projectsData";

const operationsProduct = projectsData.find((project) => project.id === "shelnova-os");

// Update this small card when Shelton’s active project changes.
export const currentFocus = {
  title: operationsProduct?.name ?? "ShelNova OS (FlowDesk)",
  status: operationsProduct?.status === "dev" ? "In development" : operationsProduct?.statusLabel ?? "In development",
  href: "/projects/shelnova-os",
  summary:
    "A single cockpit for product operations, subscription revenue, support workflows, and product health across the studio.",
  focus: ["Product operations", "Revenue visibility", "Support workflows"],
};

export const founderMilestones = [
  {
    marker: "01",
    title: "Started ShelNova Labs",
    detail: "Founded in Nairobi to turn useful ideas into software people can rely on.",
  },
  {
    marker: "02",
    title: "Built for everyday life",
    detail: "Brought products like Kadi Classic and the Swahili songbook to mobile.",
  },
  {
    marker: "03",
    title: "Explored AI and learning",
    detail: "Created BibleWise and learning tools that make knowledge easier to reach.",
  },
  {
    marker: "04",
    title: "Building the studio’s next tools",
    detail: "Now shaping ShelNova OS to bring product operations into one workspace.",
  },
];
