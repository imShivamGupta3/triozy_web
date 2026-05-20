import { BlogPost } from "./types";

export const costOfLivingInIndore: BlogPost = {
  slug: "cost-of-living-in-indore",
  title: "Cost of Living in Indore - Triozy Guide",
  description: "A practical breakdown of rent, food, transport, internet and student budgets in Indore.",
  category: "Guides",
  publishedAt: "2024-03-10",
  heroImage: "/Main_SS.png",
  keywords: [
    "cost of living Indore",
    "Indore rent cost",
    "student budget Indore",
    "monthly expenses Indore",
    "Indore living guide"
  ],
  sections: [
    {
      heading: "Quick Summary",
      type: "paragraph",
      content: [
        "In Indore, a sensible monthly budget for students is around Rs 10,000 to Rs 18,000. That covers shared housing, daily meals, transport, and basic utilities without overspending."
      ]
    },
    {
      heading: "Rent Cost",
      type: "paragraph",
      content: [
        "Shared PGs and student rooms typically range from Rs 6,000 to Rs 12,000 per month depending on the neighborhood and amenities.",
        "Popular student areas like Bhawarkuan and Scheme 54 are usually more affordable than premium localities such as Vijay Nagar."
      ]
    },
    {
      heading: "Food Cost",
      type: "paragraph",
      content: [
        "A simple daily meal plan costs around Rs 250 to Rs 350 if you eat at local messes or tiffin services. Street food and budget restaurants keep weekly meal costs low.",
        "If you cook your own food, expect monthly groceries to fall between Rs 3,000 and Rs 4,500 for one person."
      ]
    },
    {
      heading: "Transportation",
      type: "paragraph",
      content: [
        "Auto-rickshaw rides usually cost Rs 30 to Rs 70 for short trips. Local buses are cheap, while app-based cabs are best for late-night travel.",
        "Monthly commuting expenses generally stay under Rs 2,000 if you use a mix of buses and shared autos."
      ]
    },
    {
      heading: "Internet",
      type: "paragraph",
      content: [
        "Reliable broadband plans start around Rs 600 to Rs 900 per month for 30 to 40 Mbps. Mobile data plans can be even cheaper for students.",
        "For remote work or streaming, budget around Rs 1,200 per month for a good home connection."
      ]
    },
    {
      heading: "Monthly Budget Table",
      type: "cost-table",
      content: [],
      tableData: [
        { category: "Housing", low: "Rs 6,000 to Rs 10,000", high: "Rs 11,000 to Rs 16,000" },
        { category: "Food", low: "Rs 3,000 to Rs 4,500", high: "Rs 4,500 to Rs 6,000" },
        { category: "Transport", low: "Rs 1,200 to Rs 1,800", high: "Rs 2,000 to Rs 2,800" },
        { category: "Internet", low: "Rs 600 to Rs 900", high: "Rs 900 to Rs 1,200" }
      ]
    },
    {
      heading: "Best Areas for Students",
      type: "list",
      content: [],
      items: [
        "Vijay Nagar - good for young professionals and students near tech hubs.",
        "Bhawarkuan - affordable and close to coaching institutes and budget PGs.",
        "Scheme 54 - quieter, student-friendly, and lower rent for shared rooms."
      ]
    },
    {
      heading: "One-Time Setup Costs (First Month Reality)",
      type: "paragraph",
      content: [
        "The first month is usually more expensive because of deposits and setup. Even if your monthly rent is stable, you might pay deposit, moving costs, basic utensils, bedding, and small essentials like buckets, extension boards, and cleaning supplies.",
        "If you are moving into a shared flat, you may also buy basic furniture or split appliance purchases. Plan a buffer so you do not feel forced to compromise on safety or location."
      ]
    },
    {
      heading: "How to Reduce Monthly Expenses Without Sacrificing Quality",
      type: "list",
      content: [],
      items: [
        "Choose a locality that cuts commute time and daily transport spending.",
        "Split a flat with compatible flatmates to improve quality at the same budget.",
        "Use tiffin services during busy months and cook in batches when routine stabilizes.",
        "Buy used essentials locally instead of purchasing everything new.",
        "Confirm all hidden charges before you commit: maintenance, electricity policy, and water."
      ]
    }
  ],
  faq: [
    {
      question: "How much does a shared PG cost in Indore?",
      answer: "Expect Rs 6,000 to Rs 12,000 for a decent shared room, depending on location and amenities."
    },
    {
      question: "Can I live on Rs 10,000 per month?",
      answer: "Yes, with shared housing, local meals, and inexpensive transport, Rs 10,000 is realistic for students."
    }
  ]
};
