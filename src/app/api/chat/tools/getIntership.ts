import { tool } from 'ai';
import { z } from 'zod';

export const getJob = tool({
  description:
    "Gives a summary of what kind of job opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's what I'm looking for 👇

- 📅 **Type**: Full-time Data Engineer positions
- 🌍 **Location**: Anywhere in Canada or US
- 🧑‍💻 **Focus**: Data engineering, data architecture, ETL pipelines, data governance, AI/ML
- 🛠️ **Stack**: Python, SQL, PostgreSQL, AWS, GCP, Snowflake, Databricks, Airflow, dbt, PySpark, Pandas
- 💼 **Experience**: 3+ years in data engineering with Accenture, Panalyt, and freelance work
- ✅ **What I bring**: Real experience building scalable data marts, data governance, ETL pipelines, and data-driven analytics solutions
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: nmizuki648@gmail.com
- LinkedIn: https://www.linkedin.com/in/mizukinakano/
- GitHub: https://github.com/Mizuki8783?tab=repositories

Let's build amazing data/AI solutions together! ✨
    `;
  },
});
